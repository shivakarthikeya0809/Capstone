using { cuid, managed } from '@sap/cds/common';

namespace vendor.invoice;

entity Vendors : cuid, managed {

    vendorCode     : String(20);
    vendorName     : String(100);
    email          : String(100);
    phone          : String(20);
    address        : String(255);
    city           : String(50);
    country        : String(50);
    taxNumber      : String(30);
    currency       : String(5);

    status         : String(20);

    invoices       : Composition of many Invoices
                     on invoices.vendor = $self;
}
@odata.draft.enabled
entity Invoices : cuid, managed {

    invoiceNumber  : String(30);

    vendor         : Association to Vendors;

    invoiceDate    : Date;

    dueDate        : Date;

    amount         : Decimal(15,2);

    currency       : String(5);

    status         : String(20);

    submittedBy    : String(100);

    approvedBy     : String(100);

    rejectedBy     : String(100);

    rejectionReason: String(500);

    items          : Composition of many InvoiceItems
                     on items.invoice = $self;

    history        : Composition of many ApprovalHistory
                     on history.invoice = $self;

    attachments    : Composition of many Attachments
                     on attachments.invoice = $self;
}

entity InvoiceItems : cuid {

    invoice         : Association to Invoices;

    description     : String(200);

    quantity        : Integer;

    unitPrice       : Decimal(15,2);

    totalPrice      : Decimal(15,2);
}

entity ApprovalHistory : cuid, managed {

    invoice         : Association to Invoices;

    action          : String(30);

    comments        : String(500);

    performedBy     : String(100);
}

entity Attachments : cuid, managed {

    invoice         : Association to Invoices;

    fileName        : String(255);

    mediaType       : String(100);

    fileContent     : LargeBinary;
}