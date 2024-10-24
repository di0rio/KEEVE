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
    public class AlugueisController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AlugueisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Alugueis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aluguel>>> GetAluguel()
        {
            return await _context.Aluguel.ToListAsync();
        }

        // GET: api/Alugueis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aluguel>> GetAluguel(Guid id)
        {
            var aluguel = await _context.Aluguel.FindAsync(id);

            if (aluguel == null)
            {
                return NotFound();
            }

            return aluguel;
        }

		[HttpGet("InicioAluguel/{inicioAluguel}")]
		public async Task<ActionResult<IEnumerable<Aluguel>>> GetAluguelByInicio(DateTime inicioAluguel)
		{
			var alugueis = await _context.Aluguel
				.Where(a => a.InicioAluguel.Date == inicioAluguel.Date) // Comparação apenas da data (ignorando hora)
				.ToListAsync();

			if (!alugueis.Any())
			{
				return NotFound("Nenhum aluguel encontrado para a data especificada.");
			}

			return alugueis;
		}

		[HttpGet("FimAluguel/{fimAluguel}")]
		public async Task<ActionResult<IEnumerable<Aluguel>>> GetAluguelByFim(DateTime fimAluguel)
		{
			var alugueis = await _context.Aluguel
				.Where(a => a.FimAluguel.Date == fimAluguel.Date) // Comparação apenas por data
				.ToListAsync();

			if (!alugueis.Any())
			{
				return NotFound("Nenhum aluguel encontrado com essa data de término.");
			}

			return alugueis;
		}


		[HttpGet("Localizacao/{localizacao}")]
		public async Task<ActionResult<Aluguel>> GetClienteByName(string localizacao)
		{
			var aluguel = await _context.Aluguel.FirstOrDefaultAsync(c => c.Localizacao == localizacao);

			if (aluguel == null)
			{
				return NotFound("");
			}

			return aluguel;
		}


		// PUT: api/Alugueis/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
        public async Task<IActionResult> PutAluguel(Guid id, Aluguel aluguel)
        {
            if (id != aluguel.AluguelId)
            {
                return BadRequest();
            }

            _context.Entry(aluguel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AluguelExists(id))
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

        // POST: api/Alugueis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aluguel>> PostAluguel(Aluguel aluguel)
        {
            _context.Aluguel.Add(aluguel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAluguel", new { id = aluguel.AluguelId }, aluguel);
        }

        // DELETE: api/Alugueis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAluguel(Guid id)
        {
            var aluguel = await _context.Aluguel.FindAsync(id);
            if (aluguel == null)
            {
                return NotFound();
            }

            _context.Aluguel.Remove(aluguel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AluguelExists(Guid id)
        {
            return _context.Aluguel.Any(e => e.AluguelId == id);
        }
    }
}
