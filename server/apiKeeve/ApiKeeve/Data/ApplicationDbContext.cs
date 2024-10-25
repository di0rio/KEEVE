using Microsoft.EntityFrameworkCore;
using ApiKeeve.Models;
namespace ApiKeeve.Data;
using ApiKeeve.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : IdentityDbContext
{
	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

	public DbSet<Cliente> Clientes { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);
		modelBuilder.Entity<Cliente>().ToTable("Clientes");
	}

public DbSet<ApiKeeve.Models.Aluguel> Aluguel { get; set; } = default!;

public DbSet<ApiKeeve.Models.HistoricoAluguel> HistoricoAluguel { get; set; } = default!;

public DbSet<ApiKeeve.Models.Patio> Patio { get; set; } = default!;

public DbSet<ApiKeeve.Models.Veiculo> Veiculo { get; set; } = default!;

public DbSet<ApiKeeve.Models.VeiculosDisp> VeiculosDisp { get; set; } = default!;



}