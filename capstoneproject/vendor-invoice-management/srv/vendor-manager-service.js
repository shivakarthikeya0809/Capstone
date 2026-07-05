const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const { Invoices, ApprovalHistory } = this.entities;

    this.before("UPDATE", "Invoices", async (req) => {

        const id = req.data.ID || req.params?.[0]?.ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

        if (invoice?.status === "APPROVED") {
            req.reject(400, "Approved invoices cannot be edited.");
        }

    });

    this.before("DELETE", "Invoices", async (req) => {

        const id = req.data.ID || req.params?.[0]?.ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

        if (invoice?.status === "APPROVED") {
            req.reject(400, "Approved invoices cannot be deleted.");
        }

    });

    this.on("SubmitInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

        if (!invoice)
            return req.reject(404, "Invoice not found.");

        if (invoice.status !== "DRAFT")
            return req.reject(400, "Only Draft invoices can be submitted.");

        await UPDATE(Invoices)
            .set({ status: "SUBMITTED" })
            .where({ ID: id });

        await INSERT.into(ApprovalHistory).entries({
            invoice_ID: id,
            action: "SUBMITTED",
            comments: "Submitted",
            performedBy: req.user.id
        });

        return "Submitted";
    });

});