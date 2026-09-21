using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificationsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCertifications()
        {
            var certifications = new List<Certification>
            {
                new Certification
                {
                    Id = 1,
                    Title = "Machine Learning Specialization",
                    Issuer = "National Telecommunication Institute (NTI)",
                    IssueDate = "Sep 2025",
                    Summary = "Completed practical training focusing on fundamental Machine Learning algorithms, data preprocessing, and model evaluation.",
                    LinkedinUrl = "https://www.linkedin.com/in/mariam-khaled-711962312",
                    ImageUrl = "https://localhost:7001/uploads/HP-ai.png", // يمكنك استبدالها بصورة الشهادة
                    IsFeatured = true
                }
            };

            return Ok(certifications);
        }
    }
}