using ApiKeeve.Data; // Assuming this contains your DbContext class (e.g., ApplicationDbContext)
using ApiKeeve.Models; // Assuming this contains your model classes
using Microsoft.AspNetCore.Identity; // Only include if using Identity for user management
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Adicionar e configurar o CORS (Cross-Origim Resource Sharing)
builder.Services.AddCors(options => {
	options.AddPolicy("AllowAll", builder => { builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); });
});

// Adicionar e configurar o CORS (Cross-Origim Resource Sharing)
builder.Services.AddCors(options => {
	options.AddPolicy("AllowAll", builder => { builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); });
});

// Register controllers
builder.Services.AddControllers();

// Configure DbContext with dependency injection
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
	options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnection"));
});

// Identity services (include only if using Identity)
// builder.Services.AddIdentity<YourUserClass, YourRoleClass>()
//     .AddEntityFrameworkStores<ApplicationDbContext>()
//     .AddDefaultTokenProviders();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use authorization middleware if using Identity
// app.UseAuthentication();
// app.UseAuthorization();

app.MapControllers();
// Permitir autenticação e autorização a partir de qualquer origem
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAll");

app.Run();

