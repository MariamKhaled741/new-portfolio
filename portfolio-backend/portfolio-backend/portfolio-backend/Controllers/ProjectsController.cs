using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProjects()
        {
            var projects = new List<Project>
            {
                new Project
                {
                    Id = 1,
                    Title = "Personal Portfolio Website",
                    Description = "A full-stack interactive portfolio website built with .NET 8 Web API and Angular.",
                    ImageUrl = "https://localhost:7001/uploads/profile.jpg",
                    DateCompleted = "Jan 2026",
                    GithubUrl = "https://github.com/MariamKhaled741",
                    LinkedinUrl = "https://www.linkedin.com/in/mariam-khaled-711962312",
                    Technologies = ".NET 8, Angular, SCSS, SQL Server",
                    IsFeatured = true
                }
            };

            return Ok(projects);
        }

        [HttpGet("{id}")]
        public IActionResult GetProject(int id)
        {
            var project = new Project
            {
                Id = 1,
                Title = "Personal Portfolio Website",
                Description = "A full-stack interactive portfolio website built with .NET 8 Web API and Angular.",
                ImageUrl = "https://localhost:7001/uploads/profile.jpg",
                DateCompleted = "Jan 2026",
                GithubUrl = "https://github.com/MariamKhaled741",
                LinkedinUrl = "https://www.linkedin.com/in/mariam-khaled-711962312",
                Technologies = ".NET 8, Angular, SCSS, SQL Server",
                IsFeatured = true
            };

            return Ok(project);
        }
    }
}