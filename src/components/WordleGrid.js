
const WordleGrid = ({ activeCell, inputCellReferences,correctLetters, correctCells }) => {
    // const rowStartCells = [0,5,10,15,20,25]
    const cells = []
    for(let i = 1; i < 31; i++) {
        cells.push(i)
    }

    return (
        <div className="input-grid">
            {cells.map((cell) => (
                <input 
                    type="text" 
                    className={`input-field 
                    ${correctCells.includes(cell) ? "rightLetterRightPlace" : ""} 
                    ${correctLetters.includes(cell) ? "rightLetterWrongPlace" : ""}`
                    }
                    key={cell}
                    disabled={activeCell !== cell}
                    ref={(element) => {inputCellReferences.current[cell] = element}}
                />
            ))}
        </div>
    )





    //     <div className="input-grid">
    //         {rowStartCells.map((row) => (
    //             <div className="row" key={'row' + row}>
    //                 <input 
    //                     type="text" className={`input-field ${rightLetter ? "rightLetterRightPlace":""}`}
    //                     key={row + 1} id={row + 1}
    //                     onChange={(e) => handleInputChange(e, lettersInput, setLettersInput)}
    //                     disabled={activeCell !== row + 1}
    //                     ref={(element) => {inputCellReferences.current[row + 1] = element}}
    //                 />
    //                 <input 
    //                     type="text" className="input-field" 
    //                     key={row + 2} id={row + 2}
    //                     onChange={(e) => handleInputChange(e, lettersInput, setLettersInput)}
    //                     disabled={activeCell !== row + 2}
    //                     ref={(element) => {inputCellReferences.current[row + 2] = element}}
    //                 />
    //                 <input 
    //                     type="text" className="input-field" 
    //                     key={row + 3} id={row + 3}
    //                     onChange={(e) => handleInputChange(e, lettersInput, setLettersInput)}
    //                     disabled={activeCell !== row + 3}
    //                     ref={(element) => {inputCellReferences.current[row + 3] = element}}
    //                 />
    //                 <input 
    //                     type="text" className="input-field" 
    //                     key={row + 4} id={row + 4}
    //                     onChange={(e) => handleInputChange(e, lettersInput, setLettersInput)}
    //                     disabled={activeCell !== row + 4}
    //                     ref={(element) => {inputCellReferences.current[row + 4] = element}}
    //                 />
    //                 <input 
    //                     type="text" className="input-field" 
    //                     key={row + 5} id={row + 5}
    //                     onChange={(e) => handleInputChange(e, lettersInput, setLettersInput)}
    //                     disabled={activeCell !== row + 5}
    //                     ref={(element) => {inputCellReferences.current[row + 5] = element}}
    //                 />
    //             </div>
    //         ))}
    //     </div>
    // );
}
 
export default WordleGrid;