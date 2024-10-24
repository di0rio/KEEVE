namespace ApiKeeve.Models
{
	public class Aluguel
	{
		public Guid AluguelId { get; set; }
		public DateTime InicioAluguel { get; set; }
		public DateTime FimAluguel { get; set; }
		public string Localizacao { get; set; }
		public Guid VeiculoId { get; set; }
		public Veiculo? Veiculo { get; set; }
		public Guid ClienteId { get; set; }
		public Cliente? Cliente { get; set; }
	}
}
