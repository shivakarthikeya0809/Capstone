using { com.epm as epm } from '../db/schema';

service SalesService {

    entity Products as projection on epm.Products {
        ID,
        name,
        description,
        price,
        currency,
        stock,
        rating
    };

    entity Customers as projection on epm.Customers;

    entity SalesOrders as projection on epm.SalesOrders;
    entity SalesOrderItems as projection on epm.SalesOrderItems;
}