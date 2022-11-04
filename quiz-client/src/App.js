import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
