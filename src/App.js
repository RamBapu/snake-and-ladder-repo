import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import GamePad from "./Components/GamePad/GamePad";

function App() {
  const [positions, setPositions] = useState({
    playerOnePosition: 0,
    playerTwoPosition: 0,
  });

  const assignPositionDataFunc = (positionsData) => {
    setPositions(positionsData);
  };

  return (
    <>
      <div className="App">
        {positions.playerOnePosition === 100 && (
          <>
            <div className="winner-pop-up">Player One is the Winner</div>
            <h2 className="reset-game">Reset to play again!!!</h2>
          </>
        )}
        {positions.playerTwoPosition === 100 && (
          <>
            <div className="winner-pop-up">Player Two is the Winner</div>
            <h2 className="reset-game">Reset to play again!!!</h2>
          </>
        )}
        {positions.playerOnePosition !== 100 &&
          positions.playerTwoPosition !== 100 && (
            <>
              <Board playerPositions={positions} />
            </>
          )}
        <GamePad passPositionData={assignPositionDataFunc} />
      </div>
    </>
  );
}

export default App;
