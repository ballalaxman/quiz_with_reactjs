import React from "react";
import "./styles/App.css";
import Questionpage from "./components/Questionpage";
import Answerpage from "./components/Answerpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intropage from "./Intropage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Intropage />
            </div>
          }
        />
        <Route path="/questions" element={<Questionpage />} />
        <Route path="/answers" element={<Answerpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
