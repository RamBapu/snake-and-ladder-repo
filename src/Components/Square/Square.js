import React from "react";
import "./Square.css";
import LadderImg from "../../Images/Ladder.jpg";
import SnakeImg from "../../Images/Snake.jpg";
import HomeImg from "../../Images/Home.png";
import {
  snakePositions,
  ladderPositions,
} from "../../util/SnakeAndLadderPositions";

const Square = (props) => {
  return (
    <>
      <div className="snake-ladder-square">
        <div className="square-number">{props.squareNumber}</div>
        {props.squareNumber === 100 && (
          <img className="home-img" src={HomeImg} alt="Home-image" />
        )}
        {snakePositions[props.squareNumber] && (
          <>
            <img className="snake-img" src={SnakeImg} alt="Snake-image" />
            <div className="snake-positions">
              {props.squareNumber + "-" + snakePositions[props.squareNumber]}{" "}
            </div>
          </>
        )}
        {ladderPositions[props.squareNumber] && (
          <>
            <img className="ladder-img" src={LadderImg} alt="Ladder-image" />
            <div className="ladder-positions">
              {props.squareNumber + "-" + ladderPositions[props.squareNumber]}{" "}
            </div>
          </>
        )}
        {props.playerPositions.playerOnePosition === props.squareNumber && (
          <div className="coin coin-1"> </div>
        )}
        {props.playerPositions.playerTwoPosition === props.squareNumber && (
          <div className="coin coin-2"> </div>
        )}
      </div>
    </>
  );
};

export default Square;
