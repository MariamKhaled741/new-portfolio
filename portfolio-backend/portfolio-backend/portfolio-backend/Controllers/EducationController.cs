using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetEducation()
        {
            var educationList = new List<Education>
            {
                new Education
                {
                    Id = 1,
                    University = "Alexandria University",
                    Degree = "Bachelor of Computers and Data Science",
                    Duration = "Sep. 2023 – Expected Graduation 2027",
                    Location = "Alex, Egypt",
                    Courses = new List<string>
                    {
                        "Data Science", "Mathematics", "Problem Solving", "Software Engineering",
                        "OOP", "Probability & Statistics", "Web Development", "Data Visualization",
                        "Machine Learning", "Database Management", "Computer Network", "System Analysis",
                        "Data Mining", "Cloud Computing", "Operating Systems" , "Software engineering" , "Data visualization" , "System analysis"
                    }
                }
            };

            return Ok(educationList);
        }
    }
}