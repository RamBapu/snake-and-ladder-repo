import React from "react";
import "./Winner.css";
import { game } from "../../Util/Game";
import { Link } from "react-router-dom";

export const WinnerPage = () => {
  return (
    <div className="winner-pop-up">
      {game.gameWinner && (
        <div>
          <div className="winner">{`${game.gameWinner}`.toUpperCase()} is the Winner</div>
          <h2 className="reset-game">
            <button>
              <Link to="/" className="reset-button">
                Reset
              </Link>
            </button>
            to play again!!!
          </h2>
        </div>
      )}
    </div>
  );
};

export default WinnerPage;
