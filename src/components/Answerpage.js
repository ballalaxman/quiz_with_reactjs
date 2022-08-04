import React, { useEffect, useState } from "react";
import "../styles/Questionspage.css";
import Answer from "./Answer";
import { Link } from "react-router-dom";

export default function Answerpage() {
  const [questions, setQuestions] = React.useState([]);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    setQuestions(items);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      questions.map((item, index) => {
        if (localStorage.getItem(`q${index}`) === item.correct_answer) {
          setScore((prevScore) => prevScore + 1);
        }
      });
    }
  }, [questions]);

  const answer = () => {
    return (
      questions &&
      questions.length > 0 &&
      questions.map((item, index) => (
        <Answer key={index} data={item} num={index} />
      ))
    );
  };

  const options = () => {
    return (
      questions &&
      questions.map((ans) => <button>{ans.incorrect_answer}</button>)
    );
  };

  return (
    <div className="intro--page">
      <div className="qns">{answer()}</div>
      <div className="footer">
        <p>Your Score is {score}</p>
        <Link to="/questions">
          <button>Try Again</button>
        </Link>
      </div>
    </div>
  );
}
