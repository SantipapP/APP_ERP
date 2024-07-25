using Microsoft.AspNetCore.Mvc;
using ERP_Service.Models;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace ERP_Service
{
    [Route("HRControllers")]
    [ApiController]

    public class HRControllers : Controller
    {
        private readonly IConfiguration _configuration;
        public HRControllers(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("allEmp")]
        public IActionResult allEmp()
        {
            DataTable profile_dt = new DataTable();

            string query = @"SELECT * FROM TBL_Employee";
            string connnectstr = _configuration.GetConnectionString("ERPDB");

            // Connect DB ( SQL Server)
            SqlDataReader checkProfile;

            using (SqlConnection con = new SqlConnection(connnectstr))
            {
                con.Open();
                using (SqlCommand custProfile = new SqlCommand(query, con))
                {
                    //    custProfile.CommandType = CommandType.StoredProcedure;   กรณีใช้ StoredProcedure
                    checkProfile = custProfile.ExecuteReader();
                    profile_dt.Load(checkProfile);
                    checkProfile.Close();
                }
                con.Close();

            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(profile_dt);

            return Ok(JSONresult);
            //return Ok(new {message = query.ToString()});
        }

        [HttpGet("allDept")]
        public IActionResult allDept()
        {
            DataTable profile_dt = new DataTable();

            string query = @"SELECT * FROM TBL_Department";
            string connnectstr = _configuration.GetConnectionString("ERPDB");

            // Connect DB ( SQL Server)
            SqlDataReader checkProfile;

            using (SqlConnection con = new SqlConnection(connnectstr))
            {
                con.Open();
                using (SqlCommand custProfile = new SqlCommand(query, con))
                {
                    //    custProfile.CommandType = CommandType.StoredProcedure;   กรณีใช้ StoredProcedure
                    checkProfile = custProfile.ExecuteReader();
                    profile_dt.Load(checkProfile);
                    checkProfile.Close();
                }
                con.Close();

            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(profile_dt);

            return Ok(JSONresult);
            //return Ok(new {message = query.ToString()});
        }

        [HttpPost("RegistationEmp")]
        public IActionResult RegistationEmp(EmployeeModel us)
        {
            DataTable profile_dt = new DataTable();

            DateTime current_tm = DateTime.Now;

            string query = @"SP_RegistationEmp";
            string connnectstr = _configuration.GetConnectionString("ERPDB");
            try
            {// Connect DB ( SQL Server)
                SqlDataReader checkProfile;

                using (SqlConnection con = new SqlConnection(connnectstr))
                {
                    con.Open();
                    using (SqlCommand custProfile = new SqlCommand(query, con))
                    {
                        custProfile.CommandType = CommandType.StoredProcedure;
                        custProfile.Parameters.AddWithValue("@EMP_ID", us.EMP_ID);
                        custProfile.Parameters.AddWithValue("@EMP_FirstName", us.EMP_FirstName);
                        custProfile.Parameters.AddWithValue("@EMP_LastName", us.EMP_LastName);
                        custProfile.Parameters.AddWithValue("@EMP_DateOfBirth", us.EMP_DateOfBirth);
                        custProfile.Parameters.AddWithValue("@EMP_Gender", us.EMP_Gender);
                        custProfile.Parameters.AddWithValue("@EMP_HireDate", us.EMP_HireDate);
                        custProfile.Parameters.AddWithValue("@EMP_Position", us.EMP_Position);
                        custProfile.Parameters.AddWithValue("@EMP_DepartmentID", us.EMP_DepartmentID);
                        custProfile.Parameters.AddWithValue("@EMP_Salary", us.EMP_Salary);
                        custProfile.Parameters.AddWithValue("@EMP_Email", us.EMP_Email);
                        custProfile.Parameters.AddWithValue("@EMP_Phone", us.EMP_Phone);
                        custProfile.Parameters.AddWithValue("@EMP_Address", us.EMP_Address);
                        custProfile.Parameters.AddWithValue("@EMP_State", us.EMP_State);
                        custProfile.Parameters.AddWithValue("@EMP_ZipCode", us.EMP_ZipCode);
                        custProfile.Parameters.AddWithValue("@EMP_Country", us.EMP_Country);
                        checkProfile = custProfile.ExecuteReader();
                        profile_dt.Load(checkProfile);
                        checkProfile.Close();
                    }
                    con.Close();

                }
                // Convert to Json
                // string JSONresult;
                //JSONresult = JsonConvert.SerializeObject(profile_dt);
                return Ok(new { message = "OK" });
            }
            catch (Exception ex)
            {
                return Ok(new { message = ex.Message.ToString() });
            }
            //return Ok(new {message = query.ToString()});
        }
    }
}