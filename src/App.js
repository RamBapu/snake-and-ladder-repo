import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { GamePage } from "./Pages/GamePage/GamePage";

export const AppContext = createContext();

function App() {
  //State of player information is maintained globallly.
  const [playerInfo, setPlayerInfo] = useState([]);

  return (
    <>
      <div className="App">
        <AppContext.Provider value={{ playerInfo, setPlayerInfo }}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gamepage" element={<GamePage />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;


