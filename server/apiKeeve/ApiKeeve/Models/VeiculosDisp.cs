namespace ApiKeeve.Models
{
	public class VeiculosDisp
	{
		public Guid VeiculosDispId { get; set; }
		public int Qntd {  get; set; }
		public Guid PatioId { get; set; }
		public Patio? Patio { get; set; }
	}
}
