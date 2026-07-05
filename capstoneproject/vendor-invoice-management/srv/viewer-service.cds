using { vendor.invoice as db } from '../db/schema';

service ViewerService {
    entity Vendors as projection on db.Vendors;
    entity Invoices as projection on db.Invoices;
    entity InvoiceItems as projection on db.InvoiceItems;
    entity ApprovalHistory as projection on db.ApprovalHistory;
}