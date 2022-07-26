import { fiveLetterWords } from "../wordDatabase"

const rowCheck = (rowBeingPlayed, setRowBeingPlayed, lettersInput, setLettersInput, solution, correctLetters, setCorrectLetters, correctCells, setCorrectCells, activeCell, setActiveCell, setGameWon) => {

    const solutionForComparison = solution.toUpperCase().split('')
    const inputsForComparison = lettersInput.split('')
    const rightLettersRightPlace = []
    const rightLettersWrongPlace = []
    const rowStartCells = [1,6,11,16,21,26]

    if(!fiveLetterWords.includes(lettersInput.toLowerCase())){
        alert('That is not a recognised word, please change your guess')
        return
    }
    
    inputsForComparison.forEach((value, index) => {
        const cellReference = rowStartCells[rowBeingPlayed - 1] + index 
        const solutionValue = solutionForComparison[index]
        const letterIndex = solutionForComparison.indexOf(value)
        
        if(solutionForComparison.includes(value) && value !== solutionValue){
            rightLettersWrongPlace.push(cellReference)
            solutionForComparison[letterIndex] = ''   
        }      
        if(value === solutionValue) { 
            rightLettersRightPlace.push(cellReference) 
            solutionForComparison[letterIndex] = '' 
        }     
    })

    if(rightLettersRightPlace.length === 5){
        setGameWon(true)
    }

    setCorrectLetters([...correctLetters, ...rightLettersWrongPlace])
    setCorrectCells([...correctCells, ...rightLettersRightPlace])
    setRowBeingPlayed(rowBeingPlayed + 1)
    setActiveCell(activeCell + 1)
    setLettersInput('')
}

export default rowCheck
















// const checkSolution = (inputsForComparison, solutionForComparison => {
//     return inputsForComparison.every((value, index) => value === solutionForComparison[index])
// })