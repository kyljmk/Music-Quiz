using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizApi.Models;

namespace quiz.API.Controllers;

[ApiController]
[Route("[controller]")]
public class QuestionController : ControllerBase
{
    private readonly QuizDbContext _context;

    public QuestionController(QuizDbContext context)
    {
        _context = context;
    }

    // GET: api/Question
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
    {
        return await _context.Questions.ToListAsync();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Question>> GetQuestion(int id)
    {
        var question = await _context.Questions.FindAsync(id);

        if (question == null)
        {
            return NotFound();
        }

        return question;
    }

    [HttpPost]
    public async Task<ActionResult<Question>> CreateQuestion(QuestionDto dto)
    {
        var newQuestion = new Question()
        {
            Id = new Guid(),
            QuestionBody = dto.QuestionBody,
            Answer1 = dto.Answer1,
            Answer2 = dto.Answer2,
            Answer3 = dto.Answer3,
            Answer4 = dto.Answer4,
            CorrectAnswer = dto.CorrectAnswer
        };

        await _context.AddAsync(newQuestion);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetQuestion), new { id = newQuestion.Id }, newQuestion);
    }
}
