import './App.css';
import { useEffect, useRef, useState } from 'react';
import WordleGrid from './components/WordleGrid'
import Keyboard from './components/Keyboard';
import Modal from './components/Modal';
import { pickSolution } from './functions/pickSolution'


function App() {

const [solution, setSolution] = useState(pickSolution())
const [rowBeingPlayed, setRowBeingPlayed] = useState(1)
const [lettersInput, setLettersInput] = useState('')
const [activeCell, setActiveCell] = useState(1)
const inputCellReferences = useRef([])
const [correctCells, setCorrectCells] = useState([])
const [correctLetters, setCorrectLetters] = useState([])
const [gameWon, setGameWon] = useState(false)

useEffect(() => {
  console.log(solution, activeCell)
})

  return (
    <div className="App">
      <h1 className="app-header">Wordle Clone</h1>
      <WordleGrid 
        activeCell={activeCell}
        setActiveCell={setActiveCell}
        inputCellReferences={inputCellReferences}
        correctLetters={correctLetters}
        correctCells={correctCells}
      />
      <Keyboard 
        rowBeingPlayed={rowBeingPlayed}
        setRowBeingPlayed={setRowBeingPlayed}
        activeCell={activeCell}
        setActiveCell={setActiveCell}
        inputCellReferences={inputCellReferences}
        lettersInput={lettersInput}
        setLettersInput={setLettersInput}
        solution={solution}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        correctCells={correctCells}
        setCorrectCells={setCorrectCells}
        setGameWon={setGameWon}
      />
      <Modal 
        rowBeingPlayed={rowBeingPlayed}
        gameWon={gameWon}
      />
    </div>
  );
}

export default App;
