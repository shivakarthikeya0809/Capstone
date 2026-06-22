namespace com.epm;

using { cuid, managed, Currency, Country } from '@sap/cds/common';

type OrderStatus : String enum {
    New = 'N';
    InProcess = 'P';
    Completed = 'C';
    Cancelled = 'X';
};

entity Suppliers : cuid {
    name       : String(100);
    contact    : String(100);
    email      : String(100);
    phone      : String(20);
    city       : String(100);
    country    : Country;
    isActive   : Boolean default true;
    products   : Association to many Products on products.supplier = $self;
}

entity Categories : cuid {
    name           : String(50);
    description    : String(250);
    parentCategory : Association to Categories;
}

entity Products : cuid, managed {
    name        : String(100);
    description : String(250);
    price       : Decimal(9,2);
    currency    : Currency;
    stock       : Integer;
    minStock    : Integer;
    rating      : Decimal(3,2);
    supplier    : Association to Suppliers;
    category    : Association to Categories;
}

entity Customers : cuid, managed {
    name        : String(100);
    email       : String(100);
    phone       : String(20);
    city        : String(100);
    country     : Country;
    creditLimit : Decimal(15,2);
}

entity SalesOrders : cuid, managed {
    orderNumber : String(20);
    customer    : Association to Customers;
    orderDate   : Date;
    netAmount   : Decimal(15,2);
    currency    : Currency;
    status      : OrderStatus default 'N';
    items       : Composition of many SalesOrderItems on items.order = $self;
}

entity SalesOrderItems : cuid {
    order     : Association to SalesOrders;
    product   : Association to Products;
    quantity  : Integer;
    unitPrice : Decimal(9,2);
    netAmount : Decimal(15,2);
}

entity PurchaseOrders : cuid, managed {
    poNumber   : String(20);
    supplier   : Association to Suppliers;
    orderDate  : Date;
    totalAmount: Decimal(15,2);
    currency   : Currency;
    status     : String(20);
    priority   : String(10);
    expectedDate:Date;
    netAmount:Decimal(15,2);
    taxAmount:Decimal(15,2);
    stock:Integer;
    minstock:Integer;
    maxstock:Integer;
    items      : Composition of many PurchaseOrderItems on items.order = $self;
}

entity PurchaseOrderItems : cuid {
    order      : Association to PurchaseOrders;
    product    : Association to Products;
    quantity   : Integer;
    unitPrice  : Decimal(9,2);
    totalPrice : Decimal(15,2);
}