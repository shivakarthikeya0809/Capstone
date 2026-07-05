const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const { Invoices, ApprovalHistory } = this.entities;

    this.on("ApproveInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

        if (!invoice)
            return req.reject(404, "Invoice not found.");

        if (invoice.status !== "SUBMITTED")
            return req.reject(400, "Only Submitted invoices can be approved.");

        await UPDATE(Invoices)
            .set({
                status: "APPROVED",
                approvedBy: req.user.id
            })
            .where({ ID: id });

        await INSERT.into(ApprovalHistory).entries({
            invoice_ID: id,
            action: "APPROVED",
            comments: "Approved",
            performedBy: req.user.id
        });

        return "Approved";
    });

    this.on("RejectInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

        if (!invoice)
            return req.reject(404, "Invoice not found.");

        if (invoice.status !== "SUBMITTED")
            return req.reject(400, "Only Submitted invoices can be rejected.");

        await UPDATE(Invoices)
            .set({
                status: "REJECTED",
                rejectionReason: req.data.reason,
                rejectedBy: req.user.id
            })
            .where({ ID: id });

        await INSERT.into(ApprovalHistory).entries({
            invoice_ID: id,
            action: "REJECTED",
            comments: req.data.reason,
            performedBy: req.user.id
        });

        return "Rejected";
    });

});
