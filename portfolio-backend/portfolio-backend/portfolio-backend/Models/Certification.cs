namespace portfolio_backend.Models
{
    public class Certification
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;            // اسم الشهادة
        public string Issuer { get; set; } = string.Empty;           // الجهة المانحة (مثال: Coursera / NTI / DEPI)
        public string IssueDate { get; set; } = string.Empty;        // التاريخ (مثال: Sep 2025)
        public string Summary { get; set; } = string.Empty;          // 👈 ملخص بسيط عن الشهادة
        public string? LinkedinUrl { get; set; }                    // 👈 رابط بوست الشهادة على LinkedIn
        public string? ImageUrl { get; set; }                       // صورة الشهادة
        public string? Icon { get; set; }                            // آيقونة إضافية (اختياري)
        public bool IsFeatured { get; set; } = true;
    }
}