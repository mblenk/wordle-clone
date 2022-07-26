import inputLetter from "../functions/inputLetter"
import rowCheck from "../functions/rowCheck"
import deleteButton from "../functions/deleteButton"


const Keyboard = ({ rowBeingPlayed, setRowBeingPlayed, activeCell, setActiveCell, inputCellReferences, lettersInput, setLettersInput, solution, correctLetters, setCorrectLetters, correctCells, setCorrectCells, gameWon, setGameWon }) => {
    const rowOne = ['Q','W','E','R','T','Y','U','I','O','P']
    const rowTwo = ['A','S','D','F','G','H','J','K','L']
    const rowThree = ['Z','X','C','V','B','N','M']



    return (
        <div className="keyboard">
            <div className="rowOne">
                {rowOne.map(letter => (
                    <button 
                        value={letter} className="key" key={letter} 
                        onClick={(e) => inputLetter(e, activeCell, setActiveCell, inputCellReferences, lettersInput, setLettersInput)}
                    >{letter}</button>
                ))}
            </div>
            <div className="rowTwo">
                {rowTwo.map(letter => (
                    <button 
                        value={letter} className="key" key={letter} 
                        onClick={(e) => inputLetter(e, activeCell, setActiveCell, inputCellReferences, lettersInput, setLettersInput)}
                    >{letter}</button>
                ))}
            </div>
            <div className="rowThree">
                <button 
                    value="enter" 
                    className="enter key" 
                    onClick={() => rowCheck(rowBeingPlayed, setRowBeingPlayed, lettersInput, setLettersInput, solution, correctLetters, setCorrectLetters, correctCells, setCorrectCells, activeCell, setActiveCell, setGameWon, )}
                    disabled={activeCell % 5 !== 0}
                    >Enter
                </button>
                {rowThree.map(letter => (
                    <button 
                        value={letter} className="key" key={letter} 
                        onClick={(e) => inputLetter(e, activeCell, setActiveCell, inputCellReferences, lettersInput, setLettersInput)}
                    >{letter}</button>
                ))}
                <button 
                    value="delete" 
                    className="delete key"
                    onClick={() => deleteButton(setActiveCell, inputCellReferences, rowBeingPlayed, setLettersInput)}
                    >Delete
                </button>
            </div>  
        </div>
    );
}
 
export default Keyboard;