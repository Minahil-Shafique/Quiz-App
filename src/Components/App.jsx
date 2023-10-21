import React, { useContext, useState } from "react";
import Menu from "./Menu";
import Quiz from "./Quiz";
import Result from "./Result";
import GameStateContext from "../Context/QuizContext";

export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState(''); 

  return (
    <GameStateContext.Provider
      value={{ gameState, setGameState, score, setScore, username, setUsername }}
    >
      <div className="center">
        <h1>Quiz App</h1>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <Result />}
      </div>
    </GameStateContext.Provider>
  );
}
