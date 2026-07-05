using { vendor.invoice as db } from '../db/schema';

service ApproverService {
    entity Invoices as projection on db.Invoices;

    action ApproveInvoice(ID : UUID);
    action RejectInvoice(ID : UUID, reason : String);
}