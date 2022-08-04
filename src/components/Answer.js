import React, { useEffect, useState } from "react";
import "../styles/Questionspage.css";

export default function Answer(props) {
  const [answers, setAnswers] = useState([
    ...props.data.incorrect_answers,
    props.data.correct_answer,
  ]);

  useEffect(() => {
    setAnswers(answers);
  }, []);

  //   function result() {
  //     if (localStorage.getItem(`q${props.num}`) && props.data.correct_answer) {
  //       setScore(...(prevScore + 1));
  //     }
  //     return score;
  //   }

  return (
    <div className="questions">
      <div className="question">{props.data.question}</div>
      <div className="options">
        {answers &&
          answers.map((item, index) => (
            <button
              num={index}
              style={{
                backgroundColor:
                  item === localStorage.getItem(`q${props.num}`)
                    ? props.data.correct_answer ===
                      localStorage.getItem(`q${props.num}`)
                      ? "green"
                      : "#F8BCBC"
                    : "",
              }}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
}
// localStorage.getItem(`q${props.num}`)
// props.data.correct_answer
