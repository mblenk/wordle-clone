import { fiveLetterWords } from '../wordDatabase'

const pickSolution = () => {
    const selector = Math.round(Math.random() * fiveLetterWords.length)
    const puzzleSolution = fiveLetterWords[selector]
    return puzzleSolution
}

export { pickSolution }