import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = (props) => {
  const squareValues = [];
  const squareArray = [];
  let rows = 0;
  let lastValueOfRow = 0;
  for (let squareNum = 100; squareNum > 0; squareNum--) {
    squareArray.push(squareNum);
  }

  for (let squareNum = 0, diffValue = 0; squareNum < 100; squareNum++) {
    if (squareNum % 10 === 0) {
      rows += 1;
      lastValueOfRow = squareArray[squareNum];
      diffValue = 10;
    }
    if (rows % 2 === 0) {
      squareValues[squareNum] = lastValueOfRow + 1 - diffValue--;
    } else squareValues[squareNum] = squareArray[squareNum];
  }

  const playerOnePosition = props.playerPositions.playerOnePosition;
  const playerTwoPosition = props.playerPositions.playerTwoPosition;
  return (
    <>
      <div className="background-panel">
        <div className="snake-ladder-grid">
          {squareValues.map((squareValue, key) => (
            <Square
              key={squareValue}
              squareNumber={squareValue}
              playerPositions={{ playerOnePosition, playerTwoPosition }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
