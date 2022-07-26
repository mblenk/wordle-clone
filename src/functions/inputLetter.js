

const inputLetter = (e, activeCell, setActiveCell, inputCellReferences, lettersInput, setLettersInput) => {

    if(activeCell % 5 !== 0){
        setActiveCell(activeCell + 1)
    }
    
    const letterSelected = e.target.value
    const cellToBeUpdated = inputCellReferences.current[activeCell]

    cellToBeUpdated.value = letterSelected

    setLettersInput(lettersInput += letterSelected)

}

export default inputLetter