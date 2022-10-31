import React from "react";
import Board from "../../Components/Board/Board";
import GamePad from "../../Components/GamePad/GamePad";
import Winner from "../../Components/Winner/Winner";
import { game } from "../../Util/Game";
import "./GamePage.css";

export const GamePage = () => {
  return (
    <div>
      {!game.gameWinner && game.isGameStarted ? (
        <div className="game-page">
          <Board />
          <GamePad />
        </div>
      ) : (
        <Winner />
      )}
    </div>
  );
};
