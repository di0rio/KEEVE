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
    public class VeiculosDispsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VeiculosDispsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/VeiculosDisps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VeiculosDisp>>> GetVeiculosDisp()
        {
            return await _context.VeiculosDisp.ToListAsync();
        }

		// GET: api/VeiculosDisps
		[HttpGet("/VeiculosDisponives")]
		public async Task<ActionResult<IEnumerable<VeiculosDisp>>> GetVeiculosDispPatio()
		{
            var listaPatios = await _context.Patio.ToListAsync();

            List<VeiculosDisp> listaVeiculosDisp = new List<VeiculosDisp>();

			foreach (var patio in listaPatios)
            {
                var listaCarros = await _context.Veiculo.Where(v => v.PatioId == patio.PatioId).ToListAsync();
                var qtdCarros = listaCarros.Count();
                
				//            veiculosDisp.Patio = patio;
				// Create a new VeiculosDisp instance for each patio
				VeiculosDisp veiculosDisp = new VeiculosDisp
				{
					VeiculosDispId = Guid.NewGuid(),
					PatioId = patio.PatioId,
					Qntd = qtdCarros
				};

				listaVeiculosDisp.Add(veiculosDisp);
            }

			return listaVeiculosDisp;
		}





		// GET: api/VeiculosDisps/5
		[HttpGet("{id}")]
        public async Task<ActionResult<VeiculosDisp>> GetVeiculosDisp(Guid id)
        {
            var veiculosDisp = await _context.VeiculosDisp.FindAsync(id);

            if (veiculosDisp == null)
            {
                return NotFound();
            }

            return veiculosDisp;
        }


		// PUT: api/VeiculosDisps/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculosDisp(Guid id, VeiculosDisp veiculosDisp)
        {
            if (id != veiculosDisp.VeiculosDispId)
            {
                return BadRequest();
            }

            _context.Entry(veiculosDisp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculosDispExists(id))
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

        // POST: api/VeiculosDisps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VeiculosDisp>> PostVeiculosDisp(VeiculosDisp veiculosDisp)
        {
            _context.VeiculosDisp.Add(veiculosDisp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVeiculosDisp", new { id = veiculosDisp.VeiculosDispId }, veiculosDisp);
        }

        // DELETE: api/VeiculosDisps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculosDisp(Guid id)
        {
            var veiculosDisp = await _context.VeiculosDisp.FindAsync(id);
            if (veiculosDisp == null)
            {
                return NotFound();
            }

            _context.VeiculosDisp.Remove(veiculosDisp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VeiculosDispExists(Guid id)
        {
            return _context.VeiculosDisp.Any(e => e.VeiculosDispId == id);
        }
    }
}
