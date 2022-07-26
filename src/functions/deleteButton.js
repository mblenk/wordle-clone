const deleteButton = ( setActiveCell, inputCellReferences, rowBeingPlayed, setLettersInput ) => {
    const rowBoundary = rowBeingPlayed * 5 - 4
   
    const cellReferences = [rowBoundary, rowBoundary + 1, rowBoundary + 2, rowBoundary + 3, rowBoundary + 4]

    cellReferences.forEach(ref => {
        inputCellReferences.current[ref].value = ""
    })

    setLettersInput('')
    setActiveCell(rowBoundary)
} 

export default deleteButton