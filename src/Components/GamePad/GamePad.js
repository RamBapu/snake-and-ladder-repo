import React, { useState, useEffect } from "react";
import "./GamePad.css";
import SnakeLadderImg from "../../Images/Snake-ladder-cover.jpg";
import {
  snakePositions,
  ladderPositions,
} from "../../Util/SnakeAndLadderPositions";

const playerOneAllPositions = [];
const playerTwoAllPositions = [];
const GamePad = (props) => {
  const [disable, setDisable] = useState({
    playerOne: false,
    playerTwo: false,
  });
  const [playerOneRandomDiceCount, setPlayerOneRandomDiceCount] = useState(0);
  const [playerTwoRandomDiceCount, setPlayerTwoRandomDiceCount] = useState(0);
  const [playerOnePosition, setPlayerOnePosition] = useState(0);
  const [playerTwoPosition, setPlayerTwoPosition] = useState(0);

  useEffect(() => {
    setPlayerOnePosition((prevPlayerOnePosition) => {
      let newPlayerOnePosition =
        prevPlayerOnePosition + playerOneRandomDiceCount;
      if (newPlayerOnePosition <= 100) {
        if (snakePositions[newPlayerOnePosition])
          return snakePositions[newPlayerOnePosition];
        else if (ladderPositions[newPlayerOnePosition])
          return ladderPositions[newPlayerOnePosition];
        else return prevPlayerOnePosition + playerOneRandomDiceCount;
      } else return prevPlayerOnePosition;
    });
  }, [playerOneRandomDiceCount]);

  useEffect(() => {
    setPlayerTwoPosition((prevPlayerTwoPosition) => {
      let newPlayerTwoPosition =
        prevPlayerTwoPosition + playerTwoRandomDiceCount;
      if (newPlayerTwoPosition <= 100) {
        if (snakePositions[newPlayerTwoPosition])
          return snakePositions[newPlayerTwoPosition];
        else if (ladderPositions[newPlayerTwoPosition])
          return ladderPositions[newPlayerTwoPosition];
        else return prevPlayerTwoPosition + playerTwoRandomDiceCount;
      } else return prevPlayerTwoPosition;
    });
  }, [playerTwoRandomDiceCount]);

  useEffect(() => {
    buttonClickHandler();
    playerOneAllPositions.push(playerOnePosition);
    console.log(playerOneAllPositions);
    playerTwoAllPositions.push(playerTwoPosition);
    console.log(playerTwoAllPositions);
  }, [playerOnePosition, playerTwoPosition]);

  const rollPlayerOne = () => {
    setDisable({
      playerOne: true,
      playerTwo: false,
    });
    let maxValue = 6;
    let minValue = 0;
    let playerOneDice = Math.ceil(Math.random() * (maxValue - minValue));
    setPlayerOneRandomDiceCount(playerOneDice);
  };

  const rollPlayerTwo = () => {
    setDisable({
      playerTwo: true,
      playerOne: false,
    });
    let maxValue = 6;
    let minValue = 0;
    let playerTwoDice = Math.ceil(Math.random() * (maxValue - minValue));
    setPlayerTwoRandomDiceCount(playerTwoDice);
  };

  const buttonClickHandler = () => {
    props.passPositionData({
      playerOnePosition: playerOnePosition,
      playerTwoPosition: playerTwoPosition,
    });
  };

  const resetGame = () => {
    setPlayerOnePosition(0);
    setPlayerTwoPosition(0);
    setPlayerOneRandomDiceCount(0);
    setPlayerTwoRandomDiceCount(0);
    setDisable({
      playerTwo: false,
      playerOne: false,
    });
    buttonClickHandler();
  };

  return (
    <>
      <div className="game-pad">
        <h2 className="game-title">Snake and Ladder Game</h2>
        <img
          className="snake-ladder-img"
          src={SnakeLadderImg}
          alt="snake-ladder-image"
        />
        <div className="dices">
          <div className="box-area">{playerOneRandomDiceCount}</div>
          <div className="box-area">{playerTwoRandomDiceCount}</div>
        </div>
        <div className="btn">
          <button
            className="player1"
            disabled={disable.playerOne}
            onClick={rollPlayerOne}
          >
            Player 1
          </button>
          <button
            className="player2"
            disabled={disable.playerTwo}
            onClick={rollPlayerTwo}
          >
            Player 2
          </button>
        </div>
        <button className="btn reset" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
};

export default GamePad;
