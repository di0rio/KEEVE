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
    public class HistoricoAlugueisController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HistoricoAlugueisController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/HistoricoAlugueis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoricoAluguel>>> GetHistoricoAluguel()
        {
            return await _context.HistoricoAluguel.ToListAsync();
        }

        // GET: api/HistoricoAlugueis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HistoricoAluguel>> GetHistoricoAluguel(Guid id)
        {
            var historicoAluguel = await _context.HistoricoAluguel.FindAsync(id);

            if (historicoAluguel == null)
            {
                return NotFound();
            }

            return historicoAluguel;
        }

        // PUT: api/HistoricoAlugueis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistoricoAluguel(Guid id, HistoricoAluguel historicoAluguel)
        {
            if (id != historicoAluguel.HistoricoAluguelId)
            {
                return BadRequest();
            }

            _context.Entry(historicoAluguel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoricoAluguelExists(id))
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

        // POST: api/HistoricoAlugueis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HistoricoAluguel>> PostHistoricoAluguel(HistoricoAluguel historicoAluguel)
        {
            _context.HistoricoAluguel.Add(historicoAluguel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHistoricoAluguel", new { id = historicoAluguel.HistoricoAluguelId }, historicoAluguel);
        }

        // DELETE: api/HistoricoAlugueis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHistoricoAluguel(Guid id)
        {
            var historicoAluguel = await _context.HistoricoAluguel.FindAsync(id);
            if (historicoAluguel == null)
            {
                return NotFound();
            }

            _context.HistoricoAluguel.Remove(historicoAluguel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HistoricoAluguelExists(Guid id)
        {
            return _context.HistoricoAluguel.Any(e => e.HistoricoAluguelId == id);
        }
    }
}
