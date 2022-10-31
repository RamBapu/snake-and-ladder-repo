import React, { useEffect } from "react";
import { game } from "../../Util/Game";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

export const HomePage = () => {
  const { setPlayerInfo } = useContext(AppContext);

  useEffect(() => {
    game.gameWinner = "";
    game.isGameStarted = false;
    game.whoseTurnToPlay = "Player 1";
    setPlayerInfo([]);
  }, []);

  //Function to set the player information based on number of players
  function generatePlayersInfo(event) {
    game.numberOfPlayers = event.target.innerHTML;
    for (let player = 1; player <= game.numberOfPlayers; player++) {
      game.players.push(`Player ${player}`);
      setPlayerInfo((prevPlayerInfo) => [
        ...prevPlayerInfo,
        {
          playerId: player,
          player: `Player ${player}`,
          playerColor: game.playerColors[player - 1],
          playerPosition: 1,
        },
      ]);
    }
  }

  return (
    <>
      <div className="game">
        <div className="game-name"> Snake and Ladder Game</div>
        <div className="game-info">Start game by selecting number of players</div>
        <div className="no-of-player-buttons">
          <button
            className="btn "
            onClick={(event) => {
              generatePlayersInfo(event);
            }}
            style={{ backgroundColor: game.playerColors[1] }}>
            2
          </button>
          <button
            className="btn"
            onClick={(event) => {
              generatePlayersInfo(event);
            }}
            style={{ backgroundColor: game.playerColors[2] }}>
            3
          </button>
          <button
            className="btn"
            onClick={(event) => {
              generatePlayersInfo(event);
            }}
            style={{ backgroundColor: game.playerColors[3] }}>
            4
          </button>
        </div>
        <button
          onClick={() => {
            game.isGameStarted = true;
          }}>
          <Link to="/gamepage" className="start-btn">
            Start Game
          </Link>
        </button>
      </div>
    </>
  );
};
