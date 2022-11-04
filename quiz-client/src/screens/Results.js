import React from "react";
import { useNavigate } from "react-router-dom";
import useInfo from "../hooks/useInfo";

function Results() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quiz");
  };

  const { score } = useInfo();

  return (
    <div>
      <h1>Results</h1>
      <h2>You got {score} questions right!</h2>
      <button onClick={handleReturn}>Go back</button>
    </div>
  );
}

export default Results;
