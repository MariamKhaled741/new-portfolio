namespace portfolio_backend.Models
{
    public class Certification
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public string IssueDate { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public string? Icon { get; set; }
        public bool IsFeatured { get; set; } = false;
    }
}