namespace portfolio_backend.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string GithubUrl { get; set; } = string.Empty;
        public string LinkedinUrl { get; set; } = string.Empty; // 👈 إضافة الحقل
        public string DateCompleted { get; set; } = string.Empty; // 👈 إضافة الحقل
        public string? DemoUrl { get; set; }
        public string Technologies { get; set; } = string.Empty;
        public bool IsFeatured { get; set; } = true;
    }
}