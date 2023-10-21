import React, { useContext } from "react";
import GameStateContext from "../Context/QuizContext";
import Questions from "./QuizDetail";
import ResultTable from "./ResultTable";

export default function Result() {
  const { gameState, setGameState, score, setScore, username, setUsername } =
    useContext(GameStateContext);

  return (
    <div className="result">
      <div className="flex">
        <h2>Username:</h2>
        <h2>{username}</h2>
      </div>

      <div className="flex">
        <h2>Score:</h2>
        <h2>
          {score} / {Questions.length}
        </h2>
      </div>
      <button
        className="restart"
        onClick={() => {
          setGameState("menu");
          setScore(0);
        }}
      >
        Restart
      </button>
      <div>
        <ResultTable />
      </div>
    </div>
  );
}
