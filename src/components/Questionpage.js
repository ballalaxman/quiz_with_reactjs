import React, { useEffect } from "react";
import "../styles/Questionspage.css";
import Question from "./Question";
import { Link } from "react-router-dom";

export default function Questionpage() {
  const [questions, setQuestions] = React.useState([]);

  //Fetching the data from API
  const fetchData = () => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple"
    ).then(async (res) => {
      const results = await res.json();
      const a = await results.results;
      setQuestions(a);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(questions));
  }, [questions]);

  const question = () => {
    return (
      questions &&
      questions.length > 0 &&
      questions.map((item, index) => (
        <Question key={index} data={item} num={index} />
      ))
    );
  };

  return (
    <div className="intro--page">
      <div className="qns">{question()}</div>
      <Link to="/answers">
        <button className="check--ans">Check Answers</button>
      </Link>
    </div>
  );
}
