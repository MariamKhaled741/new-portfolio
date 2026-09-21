namespace portfolio_backend.Models
{
    public class Education
    {
        public int Id { get; set; }
        public string University { get; set; } = string.Empty;
        public string Degree { get; set; } = string.Empty;
        public string Duration { get; set; } = string.Empty; // Sep. 2023 – Expected Graduation 2027
        public string Location { get; set; } = string.Empty; // Alex, Egypt
        public List<string> Courses { get; set; } = new();
    }
}