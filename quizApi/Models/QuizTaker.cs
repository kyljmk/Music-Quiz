using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizApi.Models
{
    public class QuizTaker
    {
        [Key]
        public int QuizTakerId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; }
        public int Score { get; set; }
    }
}