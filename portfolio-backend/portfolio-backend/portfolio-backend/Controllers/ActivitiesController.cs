using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetActivities()
        {
            var activities = new List<Activity>
            {
                new Activity
                {
                    Id = 1,
                    Title = "Student Activity Member",
                    Organization = "IEEE Student Branch",
                    Role = "Technical Team Lead",
                    Description = "Organized workshops and technical sessions on Web Development and Problem Solving for junior students.",
                    StartDate = new DateTime(2024, 9, 1),
                    EndDate = new DateTime(2025, 6, 1)
                },
                new Activity
                {
                    Id = 2,
                    Title = "Volunteering & Community Service",
                    Organization = "Charity Organization",
                    Role = "Event Organizer",
                    Description = "Participated in organizing community outreach programs and tech awareness events.",
                    StartDate = new DateTime(2025, 1, 1),
                    EndDate = null
                }
            };

            return Ok(activities);
        }
    }
}