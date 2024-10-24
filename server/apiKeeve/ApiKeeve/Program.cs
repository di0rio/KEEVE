using ApiKeeve.Data; // Assuming this contains your DbContext class (e.g., ApplicationDbContext)
using ApiKeeve.Models; // Assuming this contains your model classes
using Microsoft.AspNetCore.Identity; // Only include if using Identity for user management
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure CORS for development or specific origins (adjust as needed)
builder.Services.AddCors(options =>
{
	if (builder.Environment.IsDevelopment())
	{
		options.AddPolicy("AllowAll", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
	}
	else
	{
		// Configure specific origins for production
		options.AddPolicy("AllowSpecificOrigins", policy =>
		{
			policy.WithOrigins("https://your-allowed-origin.com", "https://another-allowed-origin.com")
				.AllowAnyMethod()
				.AllowAnyHeader();
		});
	}
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

app.Run();