using { vendor.invoice as db } from '../db/schema';

service VendorManagerService {
    entity Invoices as projection on db.Invoices;
    entity InvoiceItems as projection on db.InvoiceItems;

    action SubmitInvoice(ID : UUID);
}