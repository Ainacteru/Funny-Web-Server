var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.WebHost.UseUrls("http://0.0.0.0:5097");

builder.Services.AddControllers();

var app = builder.Build();

app.UseDefaultFiles();  // Serves index.html
app.UseStaticFiles();

app.UseCors(); // 👈 Apply it

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
