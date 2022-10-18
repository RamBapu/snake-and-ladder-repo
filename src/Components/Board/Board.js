import React from "react";
import Square from "../Square/Square";
import './Board.css'

const Board = (props) => {
  const squareValues = [];
  const squareArray = [];
  let rows = 0;
  let lastValueOfRow = 0;
  for (let squareNum = 100; squareNum > 0; squareNum--) {
    squareArray.push(squareNum);
  }

  for (let i = 0, j = 0; i < 100; i++) {
    if (i % 10 === 0) {
      rows += 1;
      lastValueOfRow = squareArray[i];
      j = 10;
    }
    if (rows % 2 === 0) {
      j--;
      squareValues[i] = lastValueOfRow - j;
    } else squareValues[i] = squareArray[i];
  }

  const playerOnePosition = props.playerPositions.playerOnePosition
  const playerTwoPosition = props.playerPositions.playerTwoPosition
  return (
    <>
    <div className="background-panel">
        <div className="snake-ladder-grid">
        {squareValues.map((squareValue) => (
            <Square squareNumber={squareValue} playerPositions={{playerOnePosition,playerTwoPosition}} />
        ))}
        </div>
    </div>
    </>
  );
};

export default Board;
