using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTrainings()
        {
            var trainings = new List<Training>
    {
        new Training
        {
            Id = 1,
            Title = "Machine Learning Internship",
            Provider = "National Telecommunication Institute (NTI)",
            Description = "Joined NTI as a Machine Learning Trainee, focusing on gaining new skills, working on practical projects, and deepening knowledge in the field of Machine Learning.",
            StartDate = new DateTime(2025, 8, 1),
            EndDate = new DateTime(2025, 9, 30)
        },
        new Training
        {
            Id = 2,
            Title = "Full Stack ASP.NET Backend Development Trainee",
            Provider = "DEPI (Digital Egypt Pioneers Initiative)",
            Description = "Joined the Rowad Misr initiative for an intensive professional training program focused on full-stack development. Developed technical expertise in ASP.NET Core backend architectures while integrating technical excellence (Prompt Engineering), professional skills (Soft Skills, Freelancing, Coaching), and Business English proficiency for technical documentation.",
            StartDate = new DateTime(2025, 11, 28),
            EndDate = new DateTime(2026, 7, 31)
        }
    };

            return Ok(trainings);
        }
    }
}