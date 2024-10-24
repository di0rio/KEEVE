namespace ApiKeeve.Models
{
	public class Patio
	{
		public Guid PatioId { get; set; }
		public string Nome { get; set; }
		public int Capacidade { get; set; }
		public ICollection<Veiculo>? Veiculos { get; set; }
	}
}
