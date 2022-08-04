import React, { useEffect, useState } from "react";
import "../styles/Questionspage.css";

export default function Singlequestion(props) {
  const [selectdAnswer, setSelectedAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [answers, setAnswers] = React.useState([
    ...props.data.incorrect_answers,
    props.data.correct_answer,
  ]);

  // Shuffle the options
  function shuffle(arr) {
    var len = arr.length,
      temp,
      index;
    while (len > 0) {
      index = Math.floor(Math.random() * len);
      len--;
      temp = arr[len];
      arr[len] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }
  useEffect(() => {
    setShuffledAnswers(shuffle(answers));
  }, []);

  function handleClick(items) {
    setSelectedAnswer(items);
    localStorage.setItem(`q${props.num}`, items); //Storing question numbers in localstorage
  }

  return (
    <div className="questions">
      <div className="question">{props.data.question}</div>
      <div className="options">
        {shuffledAnswers &&
          shuffledAnswers.length > 0 &&
          shuffledAnswers.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleClick(item);
              }}
              style={{
                backgroundColor: item === selectdAnswer ? "#D6DBF5" : "",
                color: item === selectdAnswer ? "white" : "",
              }}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
}
