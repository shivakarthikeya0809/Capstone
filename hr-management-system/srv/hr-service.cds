using { com.hr as hr } from '../db/schema';

service AdminService @(path:'/admin') {

    entity Departments   as projection on hr.Departments;
    entity Employees     as projection on hr.Employees;
    entity Projects      as projection on hr.Projects;
    entity Skills        as projection on hr.Skills;
    entity Assignments   as projection on hr.Assignments;
    entity EmployeeSkills as projection on hr.EmployeeSkills;

}