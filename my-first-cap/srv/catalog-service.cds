/*using lib.management from '../db/schema';

service LibraryService @(path: '/library') {
  // Full CRUD:
  entity Books      as projection on management.Books;
  entity Authors    as projection on management.Authors;
  entity Genres     as projection on management.Genres;
  entity Members    as projection on management.Members;
  entity Borrowings as projection on management.Borrowings;
  entity Reviews    as projection on management.Reviews;
  
}*/

using{ lib.management as v}from '../db/schema';

service LibraryService @(path: '/library')  {
  // Full CRUD:
  entity Books      as projection on v.Books{
 ID,
 title as name,
 author as author_ID,
 genre,
 publishedDate as published_date
  };
  }

/*using{ lib.management.Books,lib.management.Authors}from '../db/schema';

service LibraryService @(path: '/library') {
  // Full CRUD:
  entity Books      as projection on lib.management.Books;
  entity Authors    as projection on lib.management.Authors;
  
}*/