namespace com.hr;

using { cuid, managed } from '@sap/cds/common';

type ProjectStatus : String(20) enum {
    Planning  = 'Planning';
    Active    = 'Active';
    OnHold    = 'On Hold';
    Completed = 'Completed';
    Cancelled = 'Cancelled';
}

type Proficiency : String(20) enum {
    Beginner    = 'Beginner';
    Intermediate = 'Intermediate';
    Advanced    = 'Advanced';
    Expert      = 'Expert';
}

type SkillCategory : String(30) enum {
    Technical  = 'Technical';
    Soft       = 'Soft';
    Management = 'Management';
    Domain     = 'Domain';
}

entity Departments : cuid, managed {
    deptName    : String(100);
    description : String(500);
    budget      : Decimal(15,2);
    location    : String(100);
    currency_code:String(3);
    head        : Association to Employees;
}

entity Employees : cuid, managed {
    firstName   : String(100);
    lastName    : String(100);
    email       : String(150);
    phone       : String(20);
    hireDate    : Date;
    salary      : Decimal(15,2);
    currency_code: String(3);
    jobTitle    : String(100);
    isActive    : Boolean default true;

    department  : Association to Departments;
}

entity Projects : cuid, managed {
    projectName : String(150);
    description : String(500);
    startDate   : Date;
    endDate     : Date;
    budget      : Decimal(15,2);
    status      : ProjectStatus;
    currency_code    : String(3);

    manager     : Association to Employees;
}

entity Skills : cuid, managed {
    skillName   : String(100);
    category    : SkillCategory;
    description : String(500);
}

entity Assignments : cuid, managed {
    role        : String(100);
    allocation  : Integer;
    startDate   : Date;
    endDate     : Date;

    employee    : Association to Employees;
    project     : Association to Projects;
}

entity EmployeeSkills : cuid, managed {
    proficiency       : Proficiency;
    yearsOfExperience : Integer;
    certifiedDate     : Date;

    employee          : Association to Employees;
    skill             : Association to Skills;
}