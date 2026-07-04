const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const bpSrv = await cds.connect.to('API_BUSINESS_PARTNER');

    const { Invoices, ApprovalHistory } = this.entities;

    const { InvoiceItems } = this.entities;

// Validate Invoice
this.before(["CREATE", "UPDATE"], "Invoices", async (req) => {

    if (req.data.amount !== undefined && req.data.amount <= 0) {
        return req.reject(400, "Amount must be greater than zero.");
    }

    if (req.data.invoiceDate && req.data.dueDate) {
        const invoiceDate = new Date(req.data.invoiceDate);
        const dueDate = new Date(req.data.dueDate);

        if (dueDate < invoiceDate) {
            return req.reject(400, "Due Date cannot be earlier than Invoice Date.");
        }
    }
});

// Auto calculate total price
this.before(["CREATE", "UPDATE"], "InvoiceItems", async (req) => {

    if (req.data.quantity != null && req.data.unitPrice != null) {
        req.data.totalPrice = req.data.quantity * req.data.unitPrice;
    }

});

    // Prevent editing approved invoices
    this.before("UPDATE", "Invoices", async (req) => {

        const id = req.data.ID || req.params?.[0]?.ID;

        const invoice = await SELECT.one
            .from(Invoices)
            .where({ ID: id });

        if (invoice?.status === "APPROVED") {
            req.reject(400, "Approved invoices cannot be edited.");
        }

    });

    // Prevent deleting approved invoices
    this.before("DELETE", "Invoices", async (req) => {

        const id = req.data.ID || req.params?.[0]?.ID;

        const invoice = await SELECT.one
            .from(Invoices)
            .where({ ID: id });

        if (invoice?.status === "APPROVED") {
            req.reject(400, "Approved invoices cannot be deleted.");
        }

    });

    // Submit Invoice
    this.on("SubmitInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

if (!invoice) {
    return req.reject(404, "Invoice not found.");
}

if (invoice.status !== "DRAFT") {
    return req.reject(400, "Only Draft invoices can be submitted.");
}

        await UPDATE(Invoices)
            .set({
                status: "SUBMITTED"
            })
            .where({ ID: id });

        await INSERT.into(ApprovalHistory).entries({
            invoice_ID: id,
            action: "SUBMITTED",
            comments: "Submitted",
            performedBy: req.user.id
        });

        return "Submitted";

    });

    // Approve Invoice
    this.on("ApproveInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

if (!invoice) {
    return req.reject(404, "Invoice not found.");
}

if (invoice.status !== "SUBMITTED") {
    return req.reject(400, "Only Submitted invoices can be approved.");
}

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

    // Reject Invoice
    this.on("RejectInvoice", Invoices, async (req) => {

        const id = req.params[0].ID;

        const invoice = await SELECT.one.from(Invoices).where({ ID: id });

if (!invoice) {
    return req.reject(404, "Invoice not found.");
}

if (invoice.status !== "SUBMITTED") {
    return req.reject(400, "Only Submitted invoices can be rejected.");
}

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

    // Dashboard
    this.on("GetDashboard", async () => {

        const total = await SELECT.from(Invoices);
        const draft = await SELECT.from(Invoices).where({ status: "DRAFT" });
        const submitted = await SELECT.from(Invoices).where({ status: "SUBMITTED" });
        const approved = await SELECT.from(Invoices).where({ status: "APPROVED" });
        const rejected = await SELECT.from(Invoices).where({ status: "REJECTED" });

        return {
            total: total.length,
            draft: draft.length,
            submitted: submitted.length,
            approved: approved.length,
            rejected: rejected.length
        };

    });
    this.on('getBusinessPartners', async () => {
    const result = await bpSrv.run(
        SELECT.from('A_BusinessPartner').limit(5)
    );
    return JSON.stringify(result);
});

});