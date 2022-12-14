import React from "react";
import Question from "../components/Question";
import useInfo from "../hooks/useInfo";
import "../styles/Quiz.css";

function Quiz() {
  const { name } = useInfo();

  const { questions } = useInfo();

  const questionElements = questions.map(
    ({
      id,
      questionBody,
      answer1,
      answer2,
      answer3,
      answer4,
      correctAnswer,
    }) => {
      return (
        <Question
          key={id}
          id={id}
          questionBody={questionBody}
          answer1={answer1}
          answer2={answer2}
          answer3={answer3}
          answer4={answer4}
          correctAnswer={correctAnswer}
        />
      );
    }
  );

  return <div>{questionElements}</div>;
}

export default Quiz;
