import React, { useState } from "react";
import "./App.css";
import ModeSelection from './components/ModeSelection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './components/Pocetna';
import ComputerHuman from './components/ComputerHuman';
import GamKonacno from './components/GamKonacno';

function App() {
  const [mode, setMode] = useState('human-human');
  const [difficulty1, setDifficulty1] = useState('easy');
  const [difficulty2, setDifficulty2] = useState('easy');
  const [selectedHeuristic, setSelectedHeuristic] = useState('easy'); // Corrected the initial state
  const [modeSelection, setModeSelection] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/covekracunar/:tezina" element={<ComputerHuman />} />
        <Route path="/ModeSelection" element={
          modeSelection ?
            <ModeSelection
              setDifficulty1={setDifficulty1}
              setDifficulty2={setDifficulty2}
              mode={mode}
              setMode={setMode}
              setSelectedHeuristic={setSelectedHeuristic} // Passed the setSelectedHeuristic function
              onFinish={() => setModeSelection(false)}
            /> :
            <GamKonacno mode={mode} difficulty1={difficulty1} difficulty2={difficulty2} setModeSelection={setModeSelection} />
        } />
      </Routes>
    </Router>
  )
}

export default App;
