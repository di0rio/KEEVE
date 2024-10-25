using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiKeeve.Data;
using ApiKeeve.Models;

namespace ApiKeeve.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VeiculosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Veiculos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Veiculo>>> GetVeiculo()
        {
            return await _context.Veiculo.ToListAsync();
        }

        // GET: api/Veiculos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Veiculo>> GetVeiculo(Guid id)
        {
            var veiculo = await _context.Veiculo.FindAsync(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            return veiculo;
        }

		[HttpGet("Nome/{nome}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByNome(string nome)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Nome == nome);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}

		[HttpGet("Modelo/{modelo}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByModelo(string modelo)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Modelo == modelo);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}

		[HttpGet("Transmissão/{transmissao}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByTransmissao(string transmissao)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Trasmissao == transmissao);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}


		[HttpGet("Portas/{portas}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByPortas(string portas)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Portas == portas);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}

		[HttpGet("Capacidade/{cap}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByCapacidade(decimal cap)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Capacidade == cap);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}

		[HttpGet("Preco/{preco}")]
		public async Task<ActionResult<Veiculo>> GetVeiculoByPreco(decimal preco)
		{
			var veiculo = await _context.Veiculo.FirstOrDefaultAsync(c => c.Preco == preco);

			if (veiculo == null)
			{
				return NotFound();
			}

			return veiculo;
		}



		// PUT: api/Veiculos/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo(Guid id, Veiculo veiculo)
        {
            if (id != veiculo.VeiculoId)
            {
                return BadRequest();
            }

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Veiculos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Veiculo>> PostVeiculo(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVeiculo", new { id = veiculo.VeiculoId }, veiculo);
        }

        // DELETE: api/Veiculos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculo(Guid id)
        {
            var veiculo = await _context.Veiculo.FindAsync(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VeiculoExists(Guid id)
        {
            return _context.Veiculo.Any(e => e.VeiculoId == id);
        }
    }
}
