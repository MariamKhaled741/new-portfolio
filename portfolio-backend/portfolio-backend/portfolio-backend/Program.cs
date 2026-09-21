using Microsoft.EntityFrameworkCore;
using portfolio_backend.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Add DbContext with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Enable CORS for Angular Frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 1. تفعيل تحويل HTTPS
app.UseHttpsRedirection();

// 2. تفعيل الملفات الثابتة (wwwroot/uploads)
app.UseStaticFiles();

// 3. تفعيل سياسة CORS
app.UseCors("AllowAngular");

// 4. التوثيق والتحكم
app.UseAuthorization();

app.MapControllers();

app.Run();