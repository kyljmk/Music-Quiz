import React, { useState } from "react";
import useInfo from "../hooks/useInfo";
import { useNavigate } from "react-router-dom";

function Question({
  id,
  questionBody,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
}) {
  const {
    name,
    email,
    questionDisplayed,
    setQuestionDisplayed,
    setScore,
    score,
  } = useInfo();

  const [selectedAnswer, setSelectedAnswer] = useState();

  console.log(selectedAnswer);

  const navigate = useNavigate();

  const postQuizTaker = () => {
    fetch("https://localhost:7197/api/quiztaker", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        score: score,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleNextQuestion = () => {
    setQuestionDisplayed((prev) => prev + 1);
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleEndQuiz = () => {
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
    postQuizTaker();
    navigate("/result");
  };

  const handleFirstSelect = () => {
    setSelectedAnswer(1);
  };

  const handleSecondSelect = () => {
    setSelectedAnswer(2);
  };

  const handleThirdSelect = () => {
    setSelectedAnswer(3);
  };

  const handleFourthSelect = () => {
    setSelectedAnswer(4);
  };

  return (
    id === questionDisplayed && (
      <div className="quiz">
        <h2 className="quiz--question">{questionBody}</h2>
        <h4
          className={
            selectedAnswer === 1 ? "quiz--selectedAnswer" : "quiz--answer"
          }
          onClick={handleFirstSelect}
        >
          {answer1}
        </h4>
        <h4
          className={
            selectedAnswer === 2 ? "quiz--selectedAnswer" : "quiz--answer"
          }
          onClick={handleSecondSelect}
        >
          {answer2}
        </h4>
        <h4
          className={
            selectedAnswer === 3 ? "quiz--selectedAnswer" : "quiz--answer"
          }
          onClick={handleThirdSelect}
        >
          {answer3}
        </h4>
        <h4
          className={
            selectedAnswer === 4 ? "quiz--selectedAnswer" : "quiz--answer"
          }
          onClick={handleFourthSelect}
        >
          {answer4}
        </h4>
        {questionDisplayed <= 4 && (
          <button className="quiz--button" onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
        {questionDisplayed === 5 && (
          <button className="quiz--button" onClick={handleEndQuiz}>
            To the results
          </button>
        )}
      </div>
    )
  );
}

export default Question;
