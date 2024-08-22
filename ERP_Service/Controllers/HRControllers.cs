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
            DataTable Stroed_dt = new DataTable();

            string query = @"EXEC SP_allEmp";
            string connnectstr = _configuration.GetConnectionString("ERPDB");

            // Connect DB ( SQL Server)
            SqlDataReader checkStroed;

            using (SqlConnection con = new SqlConnection(connnectstr))
            {
                con.Open();
                using (SqlCommand StroedQuery = new SqlCommand(query, con))
                {
                    //    StroedQuery.CommandType = CommandType.StoredProcedure;   กรณีใช้ StoredProcedure
                    checkStroed = StroedQuery.ExecuteReader();
                    Stroed_dt.Load(checkStroed);
                    checkStroed.Close();
                }
                con.Close();

            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(Stroed_dt);

            return Ok(JSONresult);
            //return Ok(new {message = query.ToString()});
        }

        [HttpGet("allDept")]
        public IActionResult allDept()
        {
            DataTable Stroed_dt = new DataTable();

            string query = @"SELECT * FROM TBL_Department";
            string connnectstr = _configuration.GetConnectionString("ERPDB");

            // Connect DB ( SQL Server)
            SqlDataReader checkStroed;

            using (SqlConnection con = new SqlConnection(connnectstr))
            {
                con.Open();
                using (SqlCommand StroedQuery = new SqlCommand(query, con))
                {
                    //    StroedQuery.CommandType = CommandType.StoredProcedure;   กรณีใช้ StoredProcedure
                    checkStroed = StroedQuery.ExecuteReader();
                    Stroed_dt.Load(checkStroed);
                    checkStroed.Close();
                }
                con.Close();

            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(Stroed_dt);

            return Ok(JSONresult);
            //return Ok(new {message = query.ToString()});
        }

        [HttpGet("NextEmpID")]
        public IActionResult NextEmpID()
        {
            DataTable Stroed_dt = new DataTable();

            string query = @"SELECT TOP 1 RIGHT('0000' + CAST(CAST(SUBSTRING(EMP_ID, 5, 4) AS INT) + 1 AS VARCHAR(4)), 4) as Next_ID FROM TBL_Employee te ORDER BY EMP_ID DESC;";
            string connnectstr = _configuration.GetConnectionString("ERPDB");

            // Connect DB ( SQL Server)
            SqlDataReader checkStroed;

            using (SqlConnection con = new SqlConnection(connnectstr))
            {
                con.Open();
                using (SqlCommand StroedQuery = new SqlCommand(query, con))
                {
                    //    StroedQuery.CommandType = CommandType.StoredProcedure;   กรณีใช้ StoredProcedure
                    checkStroed = StroedQuery.ExecuteReader();
                    Stroed_dt.Load(checkStroed);
                    checkStroed.Close();
                }
                con.Close();

            }
            // Convert to Json
            string JSONresult;

            JSONresult = JsonConvert.SerializeObject(Stroed_dt);

            return Ok(JSONresult);
            //return Ok(new {message = query.ToString()});
        }

        [HttpPost("RegistationEmp")]
        public IActionResult RegistationEmp(EmployeeModel em)
        {
            DataTable List_dt = new DataTable();

            DateTime current_tm = DateTime.Now;

            string query = @"SP_RegistationEmp";
            string connnectstr = _configuration.GetConnectionString("ERPDB");
            try
            {// Connect DB ( SQL Server)
                SqlDataReader checkStored;

                using (SqlConnection con = new SqlConnection(connnectstr))
                {
                    con.Open();
                    using (SqlCommand Stored = new SqlCommand(query, con))
                    {
                        Stored.CommandType = CommandType.StoredProcedure;
                        Stored.Parameters.AddWithValue("@EMP_ID", em.EMP_ID);
                        Stored.Parameters.AddWithValue("@EMP_FirstName", em.EMP_FirstName);
                        Stored.Parameters.AddWithValue("@EMP_LastName", em.EMP_LastName);
                        Stored.Parameters.AddWithValue("@EMP_DateOfBirth", em.EMP_DateOfBirth);
                        Stored.Parameters.AddWithValue("@EMP_Gender", em.EMP_Gender);
                        Stored.Parameters.AddWithValue("@EMP_HireDate", em.EMP_HireDate);
                        Stored.Parameters.AddWithValue("@EMP_Position", em.EMP_Position);
                        Stored.Parameters.AddWithValue("@EMP_DepartmentID", em.EMP_DepartmentID);
                        Stored.Parameters.AddWithValue("@EMP_Salary", em.EMP_Salary);
                        Stored.Parameters.AddWithValue("@EMP_Email", em.EMP_Email);
                        Stored.Parameters.AddWithValue("@EMP_Phone", em.EMP_Phone);
                        Stored.Parameters.AddWithValue("@EMP_Address", em.EMP_Address);
                        Stored.Parameters.AddWithValue("@EMP_City", em.EMP_City);
                        Stored.Parameters.AddWithValue("@EMP_State", em.EMP_State);
                        Stored.Parameters.AddWithValue("@EMP_ZipCode", em.EMP_ZipCode);
                        Stored.Parameters.AddWithValue("@EMP_Country", em.EMP_Country);
                        Stored.Parameters.AddWithValue("@EMP_Password", em.EMP_Password);
                        checkStored = Stored.ExecuteReader();
                        List_dt.Load(checkStored);
                        checkStored.Close();
                    }
                    con.Close();

                }

                return Ok(new { message = "OK" });
            }
            catch (Exception ex)
            {
                return Ok(new { message = ex.Message.ToString() });
            }

        }
    }
}