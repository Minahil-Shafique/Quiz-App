import React, { useContext } from "react";
import GameStateContext from "../Context/QuizContext";

export default function Menu() {
  const { gameState, setGameState } = useContext(GameStateContext);

  return (
    <div className="Menu">
      <button className="btn" onClick={() => setGameState("quiz")}>
        Start Quiz
      </button>
    </div>
  );
}
