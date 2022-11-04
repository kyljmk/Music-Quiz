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
  const { questionDisplayed, setQuestionDisplayed, setScore, score } =
    useInfo();

  const [selectedAnswer, setSelectedAnswer] = useState();

  const navigate = useNavigate();

  const handleNextQuestion = () => {
    setQuestionDisplayed((prev) => prev + 1);
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleEndQuiz = () => {
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
      <div>
        <h2>{questionBody}</h2>
        <h4 onClick={handleFirstSelect}>{answer1}</h4>
        <h4 onClick={handleSecondSelect}>{answer2}</h4>
        <h4 onClick={handleThirdSelect}>{answer3}</h4>
        <h4 onClick={handleFourthSelect}>{answer4}</h4>
        {questionDisplayed <= 4 && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}
        {questionDisplayed === 5 && (
          <button onClick={handleEndQuiz}>To the results</button>
        )}
        <h1>{score}</h1>
      </div>
    )
  );
}

export default Question;
