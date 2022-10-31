import React, { useRef } from "react";
import "./GamePad.css";
import SnakeLadderImg from "../../Images/Snake-ladder-cover.jpg";
import { snakePositions, ladderPositions } from "../../Util/SnakeAndLadderPositions";
import { useContext } from "react";
import { AppContext } from "../../App";
import { game } from "../../Util/Game";
import { Link } from "react-router-dom";

const GamePad = () => {
  const { playerInfo, setPlayerInfo } = useContext(AppContext);
  const diceRef = useRef(null);

  //In this function,when the dice is rolled Player is set to new player position.
  const rollDice = () => {
    let playerEl = playerInfo.find((currentPlayer) => {
      return currentPlayer.player === game.whoseTurnToPlay;
    });

    let maxValue = 6;
    let minValue = 0;
    let diceCount = Math.ceil(Math.random() * (maxValue - minValue));
    diceRef.current.value = diceCount;

    let newPlayerPosition = playerEl.playerPosition + diceCount;

    //Player Position is rendered based on snake/ladder.
    if (newPlayerPosition < 100) {
      if (snakePositions[newPlayerPosition]) 
        newPlayerPosition = snakePositions[newPlayerPosition];
      else if (ladderPositions[newPlayerPosition])
        newPlayerPosition = ladderPositions[newPlayerPosition];
    }else if (newPlayerPosition > 100) {
      newPlayerPosition = playerEl.playerPosition;
    }else{
        game.gameWinner = playerEl.player;
    }

    //Setting the Turn of play to the next player.
    if (playerEl.playerId < game.numberOfPlayers) {
      game.whoseTurnToPlay = `Player ${playerEl.playerId + 1}`;
    } else {
      game.whoseTurnToPlay = `Player 1`;
    }

    //Setting the Player new position to player info
    setPlayerInfo((current) =>
      current.map((obj) => {
        if (obj.playerId === playerEl.playerId) {
          return { ...obj, playerPosition: newPlayerPosition };
        }
        return obj;
      })
    );
  };

  return (
    <>
      <div className="game-pad">
        <h2 className="game-title">Snake and Ladder Game</h2>
        <img className="snake-ladder-img" src={SnakeLadderImg} alt="snake-ladder-img" />
        <div className="dices">
          <textarea className="box-area" ref={diceRef} disabled></textarea>
        </div>
        <div className="player-button-grid">
          {playerInfo.map((player) => {
            return (
              player.playerId && (
                <button
                  className={`player${player.playerId} button`}
                  onClick={rollDice}
                  disabled={game.whoseTurnToPlay === player.player ? false : true}
                  key={player.playerId}>{`Player${player.playerId}`}</button>
              )
            );
          })}
        </div>
        <button>
          <Link to="/" className="button reset-btn">
            Reset
          </Link>
        </button>
      </div>
    </>
  );
};

export default GamePad;
