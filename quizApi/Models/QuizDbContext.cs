using Microsoft.EntityFrameworkCore;

namespace quizApi.Models
{
    public class QuizDbContext : DbContext
    {
        public QuizDbContext(DbContextOptions<QuizDbContext> options) : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<QuizTaker> QuizTakers { get; set; }
    }
}