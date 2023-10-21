import React, { useContext, useRef, useState } from "react";
import GameStateContext from "../Context/QuizContext";

export default function Menu() {
  const { setGameState, username, setUsername } = useContext(GameStateContext);
  const [inputUsername, setInputUsername] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputUsername(e.target.value);
    setUsername(inputUsername);
  };

  return (
    <div className="Menu">
      <form id="form">
        <input
          className="menu"
          ref={inputRef}
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
        />
      </form>
      <button className="btn" onClick={() => setGameState("quiz")}>
        Start Quiz
      </button>
    </div>
  );
}
