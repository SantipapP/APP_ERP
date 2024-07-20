using Microsoft.AspNetCore.Mvc;
// using ERP_Service.Models;
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
    }
}