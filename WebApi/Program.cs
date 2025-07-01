var builder = WebApplication.CreateBuilder(args);

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseCors("AllowAll"); // 👈 Apply it

app.MapControllers();

app.Run();
