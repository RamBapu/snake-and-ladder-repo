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

  const game = {
    players : ['player1','player2'],
    gameWinner : () => {
      if(positions.playerOnePosition === 100)
      return 'player1' 
      else if(positions.playerTwoPosition === 100)
      return 'player2'
      else
      return ''
    }
  }

  return (
    <>
      <div className="App">
        {game.gameWinner() === 'player1' && (
          <>
            <div className="winner-pop-up">Player One is the Winner</div>
            <h2 className="reset-game">Reset to play again!!!</h2>
          </>
        )}
        {game.gameWinner() === 'player2' && (
          <>
            <div className="winner-pop-up">Player Two is the Winner</div>
            <h2 className="reset-game">Reset to play again!!!</h2>
          </>
        )}
        {!game.gameWinner() && (
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
