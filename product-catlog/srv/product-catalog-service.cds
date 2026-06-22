using { com.catalog as db } from '../db/product-catalog';

service ProductCatalogService @(path: '/products') {
  entity Products as projection on db.Products;
  entity Categories as projection on db.Categories;
}

