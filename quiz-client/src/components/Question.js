import React from "react";

function Question({
  questionBody,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
}) {
  return (
    <div>
      <h2>{questionBody}</h2>
      <h4>{answer1}</h4>
      <h4>{answer2}</h4>
      <h4>{answer3}</h4>
      <h4>{answer4}</h4>
    </div>
  );
}

export default Question;
