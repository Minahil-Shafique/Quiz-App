import React, { useContext } from "react";
import GameStateContext from "../Context/QuizContext";
import Questions from "./QuizDetail";

export default function Result() {
  const { gameState, setGameState, score, setScore } =
    useContext(GameStateContext);

  return (
    <div className="result">
      <h1>Score</h1>
      <h2>
        {score} / {Questions.length}
      </h2>
      <button
        className="restart"
        onClick={() => {
          setGameState("menu");
          setScore(0);
        }}
      >
        Restart
      </button>
    </div>
  );
}
