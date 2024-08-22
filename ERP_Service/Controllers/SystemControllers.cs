using Microsoft.AspNetCore.Mvc;
using ERP_Service.Models;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace ERP_Service
{
    [Route("SystemControllers")]
    [ApiController]

    public class SystemControllers : Controller
    {
        private readonly IConfiguration _configuration;
        public SystemControllers(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("AuthLogin")]
        public IActionResult AuthLogin(EmployeeModel em)
        {
            DataTable stored_dt = new DataTable();

            DateTime current_tm = DateTime.Now;

            string query = @"SP_AuthLogin";
            string connnectstr = _configuration.GetConnectionString("ERPDB");
            try
            {
                SqlDataReader checkStored;

                using (SqlConnection con = new SqlConnection(connnectstr))
                {
                    con.Open();
                    using (SqlCommand Stored = new SqlCommand(query, con))
                    {
                        Stored.CommandType = CommandType.StoredProcedure;
                        Stored.Parameters.AddWithValue("@EMP_ID", em.EMP_ID);
                        Stored.Parameters.AddWithValue("@EMP_Password", em.EMP_Password);
                        checkStored = Stored.ExecuteReader();

                        if (!checkStored.HasRows)
                        {
                            return NotFound(); // ส่ง HTTP 404 ในกรณีไม่พบข้อมูล
                        }

                        stored_dt.Load(checkStored);
                        checkStored.Close();
                    }
                    con.Close();
                }

                // Convert to Json
                string JSONresult;
                JSONresult = JsonConvert.SerializeObject(stored_dt);
                return Ok(JSONresult);
            }
            catch (Exception ex)
            {
                return Ok(new { message = ex.Message.ToString() });
            }
        }

        [HttpPost("UpdateEmp")]
        public IActionResult UpdateEmp(EmployeeModel em)
        {
            DataTable Stored_dt = new DataTable();

            DateTime current_tm = DateTime.Now;

            string query = @"SP_UpdateEmp";
            string connnectstr = _configuration.GetConnectionString("ERPDB");
            try
            {// Connect DB ( SQL Server)
                SqlDataReader StoredList;

                using (SqlConnection con = new SqlConnection(connnectstr))
                {
                    con.Open();
                    using (SqlCommand Stored = new SqlCommand(query, con))
                    {
                        Stored.CommandType = CommandType.StoredProcedure;
                        Stored.Parameters.AddWithValue("@EMP_ID", em.EMP_ID);
                        Stored.Parameters.AddWithValue("@EMP_Password", em.EMP_Password);
                        Stored.Parameters.AddWithValue("@EMP_IsChangePass", em.EMP_IsChangePass);
                        StoredList = Stored.ExecuteReader();
                        Stored_dt.Load(StoredList);
                        StoredList.Close();
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