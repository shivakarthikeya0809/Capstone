namespace my.bookshop;

entity Books {
  key ID    : Integer;
  title     : String(100);
  author    : String(100);
  price     : Decimal(10,2);
  stock     : Integer;
  category  : String(50);
}

entity Authors {
  key ID    : Integer;
  name      : String(100);
  country   : String(50);
}