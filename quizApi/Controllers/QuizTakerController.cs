using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizApi.Models;

namespace QuizAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizTakerController : ControllerBase
    {
        private readonly QuizDbContext _context;

        public QuizTakerController(QuizDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuizTaker>>> GetQuizTakers()
        {
            return await _context.QuizTakers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<QuizTaker>> GetQuizTaker(int id)
        {
            var quizTaker = await _context.QuizTakers.FindAsync(id);

            if (quizTaker == null)
            {
                return NotFound();
            }

            return Ok(quizTaker);
        }

        [HttpPost]
        public async Task<ActionResult<QuizTaker>> CreateQuestion(QuizTakerDto dto)
        {
            var newQuizTaker = new QuizTaker()
            {
                Name = dto.Name,
                Email = dto.Email
            };

            await _context.AddAsync(newQuizTaker);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetQuizTaker), new { id = newQuizTaker.QuizTakerId }, newQuizTaker);
        }

        [HttpPut]
        public async Task<ActionResult<QuizTaker>> AddScore(int score, int id)
        {
            var quizTaker = await _context.QuizTakers.FindAsync(id);

            if (quizTaker == null)
            {
                return NotFound();
            }

            quizTaker.Score = score;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveQuizTaker(int id)
        {
            var quizTaker = await _context.QuizTakers.FindAsync(id);

            if (quizTaker == null)
            {
                return NotFound();
            }

            _context.Remove(quizTaker);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}