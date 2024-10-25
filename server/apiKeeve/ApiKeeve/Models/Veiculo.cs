namespace ApiKeeve.Models
{
    public class Veiculo
    {
        public Guid VeiculoId { get; set; }
        public string Nome { get; set; }
        public string Modelo { get; set; }
        public string Trasmissao { get; set; }
        public string Portas { get; set; }
        public decimal Capacidade { get; set; }
        public decimal Preco { get; set; }
        public Guid PatioId { get; set; }
		public Patio? Patio { get; set; }
	}
}
