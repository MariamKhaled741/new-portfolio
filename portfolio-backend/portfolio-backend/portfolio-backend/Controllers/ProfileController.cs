using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using portfolio_backend.Data;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfileController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Profile
        [HttpGet]
        public async Task<ActionResult<ProfileInfo>> GetProfile()
        {
            var profile = await _context.ProfileInfos.FirstOrDefaultAsync();

            // إذا كانت قاعدة البيانات فارغة، يتم إرجاع بيانات مبدئية تلقائياً
            if (profile == null)
            {
                var defaultProfile = new ProfileInfo
                {
                    FullName = "Mariam Khaled Ahmed",
                    Title = "Full-Stack Software Engineer & Data Science Student",
                    Bio = "Passionate Full-Stack Developer specializing in .NET Core, Angular, React and building scalable web applications.",
                    ImageUrl = "https://github.com/MariamKhaled741.png",
                    cvUrl = "/uploads/cv.pdf", // رابط الـ CV من مجلد uploads
                    GithubUrl = "https://github.com/MariamKhaled741",
                    LinkedinUrl = "https://www.linkedin.com/in/mariam-khaled-711962312"
                };

                _context.ProfileInfos.Add(defaultProfile);
                await _context.SaveChangesAsync();
                return Ok(defaultProfile);
            }

            return Ok(profile);
        }

        // PUT: api/Profile
        [HttpPut]
        public async Task<IActionResult> UpdateProfile([FromBody] ProfileInfo profileData)
        {
            var existing = await _context.ProfileInfos.FirstOrDefaultAsync();

            if (existing == null)
            {
                _context.ProfileInfos.Add(profileData);
            }
            else
            {
                existing.FullName = profileData.FullName;
                existing.Title = profileData.Title;
                existing.Bio = profileData.Bio;
                existing.ImageUrl = profileData.ImageUrl;
                existing.cvUrl = profileData.cvUrl;
                existing.GithubUrl = profileData.GithubUrl;
                existing.LinkedinUrl = profileData.LinkedinUrl;
            }

            await _context.SaveChangesAsync();
            return Ok(existing ?? profileData);
        }
    }
}