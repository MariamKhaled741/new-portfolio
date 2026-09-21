using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProfile()
        {
            var profile = new ProfileInfo
            {
                Id = 1,
                FullName = "Mariam Khaled Ahmed ",
                Title = "Full-Stack Software Engineer & Data Science Student",
                Bio = "Passionate Full-Stack Developer specializing in .NET Core, Angular, and building scalable web applications.",
                ImageUrl = "https://localhost:7001/uploads/profile.jpg",
                CvUrl = "https://localhost:7001/uploads/Mariam_Khaled_CV.pdf",
                GithubUrl = "https://github.com/MariamKhaled741",
                LinkedinUrl = "https://www.linkedin.com/in/mariam-khaled-711962312"
            };

            return Ok(profile);
        }
    }
}