using Microsoft.EntityFrameworkCore;
using portfolio_backend.Models;

namespace portfolio_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<ContactMessage> Messages { get; set; }
    }
}