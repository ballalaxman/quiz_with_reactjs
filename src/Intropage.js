import React from "react";
import { Link } from "react-router-dom";

export default function Intropage() {
  return (
    <div className="intro--page">
      <nav className="header">
        <h1>Quizzical</h1>
        <p>Have a great journey with Quiz</p>
      </nav>
      <Link to="/questions">
        <button className="start--quiz">Start Quiz</button>
      </Link>
    </div>
  );
}
