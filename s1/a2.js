const cds = require('@sap/cds')

module.exports = class PublicService extends cds.ApplicationService {

  async init() {

    const { Events, Bookings, Waitlist } = this.entities

    this.before('CREATE', 'Bookings', async (req) => {

      const event = await SELECT.one
        .from(Events)
        .where({ ID: req.data.event_ID })

      if (!event) {
        return req.reject(404, 'Event not found')
      }

      if (event.status !== 'Published') {
        return req.reject(400, 'Event must be Published')
      }

      if (
        req.data.numberOfTickets < 1 ||
        req.data.numberOfTickets > 10
      ) {
        return req.reject(
          400,
          'numberOfTickets must be between 1 and 10'
        )
      }

      const seatsLeft =
        event.maxAttendees - event.currentAttendees

      if (req.data.numberOfTickets > seatsLeft) {

        const count = await SELECT.from(Waitlist)
          .where({ event_ID: event.ID })

        await INSERT.into(Waitlist).entries({
          position: count.length + 1,
          requestedTickets: req.data.numberOfTickets,
          event_ID: req.data.event_ID,
          attendee_ID: req.data.attendee_ID
        })

        return req.reject(
          400,
          'Not enough seats. Added to waitlist.'
        )
      }

      req.data.totalAmount =
        req.data.numberOfTickets * event.ticketPrice

      req.data.bookingDate = new Date()

      req.data.status = 'Pending'
    })

    this.on('confirmPayment', 'Bookings', async (req) => {

      const { ID } = req.params[0]

      const booking = await SELECT.one
        .from(Bookings)
        .where({ ID })

      if (!booking) {
        return req.reject(404, 'Booking not found')
      }

      if (booking.status !== 'Pending') {
        return req.reject(
          400,
          'Only pending bookings can be confirmed'
        )
      }

      if (!req.data.paymentRef) {
        return req.reject(
          400,
          'paymentRef is required'
        )
      }

      await UPDATE(Bookings)
        .set({
          status: 'Confirmed',
          paymentRef: req.data.paymentRef
        })
        .where({ ID })

      const event = await SELECT.one
        .from(Events)
        .where({ ID: booking.event_ID })

      const attendees =
        event.currentAttendees +
        booking.numberOfTickets

      await UPDATE(Events)
        .set({
          currentAttendees: attendees
        })
        .where({ ID: event.ID })

      if (attendees >= event.maxAttendees) {

        await UPDATE(Events)
          .set({ status: 'SoldOut' })
          .where({ ID: event.ID })

        const waitlistCount =
          await SELECT.from(Waitlist)
            .where({ event_ID: event.ID })

        await this.emit('EventSoldOut', {
          eventId: event.ID,
          eventName: event.eventName,
          waitlistCount: waitlistCount.length
        })
      }

      return {
        status: 'SUCCESS',
        message: 'Payment confirmed'
      }
    })

    this.on('checkAvailability', async (req) => {

      const event = await SELECT.one
        .from(Events)
        .where({ ID: req.data.eventId })

      if (!event) {
        return {
          available: false,
          seatsLeft: 0,
          message: 'Event not found'
        }
      }

      const seatsLeft =
        event.maxAttendees -
        event.currentAttendees

      return {
        available:
          seatsLeft >= req.data.tickets,
        seatsLeft,
        message:
          seatsLeft >= req.data.tickets
            ? 'Seats available'
            : 'Insufficient seats'
      }
    })

    return super.init()
  }