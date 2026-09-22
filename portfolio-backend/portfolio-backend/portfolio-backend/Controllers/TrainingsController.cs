using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using portfolio_backend.Data;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TrainingsController(AppDbContext context)
        {
            _context = context;
        }

        // 1️⃣ GET: api/Trainings (عرض كل التدريبات من SQL)
        [HttpGet]
        public async Task<IActionResult> GetTrainings()
        {
            var trainings = await _context.Trainings.ToListAsync();
            return Ok(trainings);
        }

        // 2️⃣ GET: api/Trainings/5 (عرض تدريب معين حسب ID)
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTraining(int id)
        {
            var training = await _context.Trainings.FindAsync(id);
            if (training == null)
            {
                return NotFound();
            }
            return Ok(training);
        }

        // 3️⃣ POST: api/Trainings (إضافة تدريب جديد إلى SQL)
        [HttpPost]
        public async Task<IActionResult> PostTraining([FromBody] Training training)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Trainings.Add(training);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTraining), new { id = training.Id }, training);
        }

        // 4️⃣ PUT: api/Trainings/5 (تعديل بيانات تدريب)
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTraining(int id, [FromBody] Training training)
        {
            if (id != training.Id)
            {
                return BadRequest("Training ID mismatch");
            }

            _context.Entry(training).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        // 5️⃣ DELETE: api/Trainings/5 (حذف تدريب من SQL)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTraining(int id)
        {
            var training = await _context.Trainings.FindAsync(id);
            if (training == null)
            {
                return NotFound();
            }

            _context.Trainings.Remove(training);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainingExists(int id)
        {
            return _context.Trainings.Any(e => e.Id == id);
        }
    }
}