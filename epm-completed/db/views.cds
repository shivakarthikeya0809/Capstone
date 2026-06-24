namespace com.epm.views;
using { com.epm as epm } from './schema';

entity ProductCatalog as select from epm.Products {
    ID,
    name,
    price,
    currency,
    supplier.name as supplierName,
    category.name as categoryName,
    stock,

    case
        when stock <= minStock then 'LOW'
        else 'OK'
    end as stockStatus : String(10)
};

entity OrderReport as select from epm.SalesOrders {
    ID,
    orderNumber,
    customer.name as customerName,
    netAmount,
    orderDate,
    status
};

entity LowStockAlert as select from epm.Products {
    ID,
    name,
    stock,
    minStock,
    supplier.name as supplierName,
    supplier.contact as supplierContact,
    supplier.email as supplierEmail
}
where stock <= minStock;