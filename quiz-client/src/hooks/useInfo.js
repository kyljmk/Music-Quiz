import { createContext, useContext, useMemo, useState, useEffect } from "react";

const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionDisplayed, setQuestionDisplayed] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://localhost:7197/question")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const value = useMemo(
    () => ({
      name,
      setName,
      email,
      setEmail,
      questions,
      setQuestions,
      questionDisplayed,
      setQuestionDisplayed,
      score,
      setScore,
    }),
    [name, email, questions, score, questionDisplayed]
  );

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export default function useInfo() {
  return useContext(InfoContext);
}
