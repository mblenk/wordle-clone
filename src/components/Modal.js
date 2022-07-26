import { useRef } from "react";


const Modal = ({ rowBeingPlayed, gameWon }) => {
    const numberOfGuesses = rowBeingPlayed - 1

    const modal = useRef()

    return (
        <div className={`
        ${!gameWon ? "modal-hidden" : ""}
        ${ gameWon ? "modal-visible" : ""}
        `}
        ref={modal}
        >
            <div className="modal-box">
                <h2 id="modal-text">Congratulations!</h2>
                <h3 id="modal-time">You took {numberOfGuesses > 1 ? numberOfGuesses + " guesses" : numberOfGuesses + " guess"}</h3>
                <button className="close-modal" onClick={() => window.location.reload(false)}>X</button>
            </div>
        </div>  
    );
}
 
export default Modal;