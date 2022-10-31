import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = () => {
  const squareValues = [];
  const squareArray = [];
  let rows = 0;
  let lastValueOfRow = 0;

  //Generating the square numbers in square array
  for (let squareNum = 100; squareNum > 0; squareNum--) {
    squareArray.push(squareNum);
  }

  //Creating the game numbers in square values array
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

  return (
    <>
      <div>
        <div className="snake-ladder-grid">
          {squareValues.map((squareValue) => (
            <Square key={squareValue} squareNumber={squareValue} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
