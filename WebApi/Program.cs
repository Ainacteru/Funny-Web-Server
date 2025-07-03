var builder = WebApplication.CreateBuilder(args);

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

app.UseDefaultFiles();  // Serves index.html
app.UseStaticFiles();

app.UseCors("AllowAll"); // 👈 Apply it

app.MapControllers();

app.Run();
