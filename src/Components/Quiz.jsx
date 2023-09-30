import React, { useState, useContext } from "react";
import Questions from "./QuizDetail";
import GameStateContext from "../Context/QuizContext";

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const [question, setQuestion] = useState(0);
  // const [option, setSelectedOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  let currentQuestion = Questions[question];

  const finishQuiz = () => {
    if (currentQuestion.correct_answer == selectedOption) {
      setScore(score + 1);
    }
    setGameState("result");
  };

  const next = () => {
    if (currentQuestion.correct_answer == selectedOption) {
      setScore(score + 1);
    }
    if (question + 1 < Questions.length) {
      setQuestion(question + 1);
    } else {
      setGameState("result");
    }
  };

  return (
    <div>
      <div className="Quiz">
        <p className="corner">
          {question + 1} of {Questions.length} Question
        </p>
        <h2>{currentQuestion.prompt}</h2>
        <button onClick={() => setSelectedOption(currentQuestion.options[0])}>
          {currentQuestion.options[0]}
        </button>
        <button onClick={() => setSelectedOption(currentQuestion.options[1])}>
          {currentQuestion.options[1]}
        </button>
        <button onClick={() => setSelectedOption(currentQuestion.options[2])}>
          {currentQuestion.options[2]}
        </button>
        <button onClick={() => setSelectedOption(currentQuestion.options[3])}>
          {currentQuestion.options[3]}
        </button>
      </div>
      <button
        className="Previous btn"
        onClick={() => {
          setQuestion(question - 1);
        }}
      >
        Previous
      </button>

      {question + 1 === Questions.length ? (
        <button className="next btn" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="next btn" onClick={next}>
          Next
        </button>
      )}
    </div>
  );
}
