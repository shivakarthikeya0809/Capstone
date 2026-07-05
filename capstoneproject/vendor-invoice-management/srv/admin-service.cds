using { vendor.invoice as db } from '../db/schema';

type Dashboard {
    total      : Integer;
    draft      : Integer;
    submitted  : Integer;
    approved   : Integer;
    rejected   : Integer;
}

service AdminService {

    entity Vendors as projection on db.Vendors;

    entity Invoices as projection on db.Invoices
        actions {
            action SubmitInvoice();
            action ApproveInvoice();
            action RejectInvoice(reason : String);
        };

    entity InvoiceItems as projection on db.InvoiceItems;

    entity ApprovalHistory as projection on db.ApprovalHistory;

    entity Attachments as projection on db.Attachments;

    action GetDashboard() returns Dashboard;

    action getBusinessPartners() returns String;
}