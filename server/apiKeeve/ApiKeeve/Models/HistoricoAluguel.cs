namespace ApiKeeve.Models
{
	public class HistoricoAluguel
	{
		public Guid HistoricoAluguelId { get; set; }
		public string Evento { get; set; }
		public DateTime DataEvento { get; set; }
		public Guid AluguelId { get; set; }
		public Aluguel? Aluguel { get; set; }
	}
}
