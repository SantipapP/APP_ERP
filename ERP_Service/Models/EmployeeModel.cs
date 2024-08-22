using System;
namespace ERP_Service.Models
{
    public class EmployeeModel
    {
        public string? EMP_ID {get; set;}
        public string? EMP_FirstName {get; set;}
        public string? EMP_LastName {get; set;}
        public string? EMP_DateOfBirth {get; set;}
        public string? EMP_Gender {get; set;}
        public string? EMP_HireDate {get; set;}
        public string? EMP_Position {get; set;}
        public string? EMP_DepartmentID {get; set;}
        public int? EMP_Salary {get; set;}
        public string? EMP_Email {get; set;}
        public string? EMP_Phone {get; set;}
        public string? EMP_Address {get; set;}
        public string? EMP_City {get; set;}
        public string? EMP_State {get; set;}
        public string? EMP_ZipCode {get; set;}
        public string? EMP_Country {get; set;}
        public string? EMP_Password {get; set;}
        public string? EMP_IsChangePass {get; set;}
    }
}