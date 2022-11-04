namespace quizApi.Models
{
    public class QuestionDto
    {
        public string QuestionBody { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        public int CorrectAnswer { get; set; }
    }

    public class QuizTakerDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int Score { get; set; }
    }
}