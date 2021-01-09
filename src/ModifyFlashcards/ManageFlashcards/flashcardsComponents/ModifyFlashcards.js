import {putFlashcard} from '../flashcardsRequests/putFlashcard';
import {useState, useEffect, useRef} from 'react';

export const ModifyFlashcards = ({refreshFlashcards, flashcardId, flashcardFirst, flashcardSecond, showInputs}) => {

    const [modifySentenceOne, setModifySentenceOne] = useState("");
    const [modifySentenceTwo, setModifySentenceTwo] = useState("");
    const [flag, setFlag] = useState(false);
    const modifyInputsRef = useRef(null);

    // saving input text to add new flashcard
    const sentenceOne = (e) => {
        setModifySentenceOne(e.target.value);
    }

    // saving second input text to add new flashcard
    const sentenceTwo = (e) => {
        setModifySentenceTwo(e.target.value);
    }

    // saving sentence combined with two inputs to add to database
    const modifySentence = async () => {
        await putFlashcard(modifySentenceOne, modifySentenceTwo, flashcardId)
        refreshFlashcards();
    }

    useEffect(() => {
        toggleClass();
    }, [showInputs])

    const toggleClass = () => {
        if(flag){
            modifyInputsRef.current.classList.toggle('slideInFromBottom');
        }
        setFlag(true);
    }

    return(
        <div ref={modifyInputsRef} class="modifyFlashcardForm">
            <div className="firstSentenceContainerModify">
                <label for="firstSentence">
                    <span><p>first sentence</p></span>
                </label>
                <input type="text" autocomplete="off" name="firstSentence" className="modifyFlashcardInput" onChange={sentenceOne} placeholder={flashcardFirst} required></input>
            </div>

            <div className="secondSentenceContainerModify">
                <label for="secondSentence">
                    <span><p>second sentence</p></span>
                </label>
                <textarea autocomplete="off" name="secondSentence" className="modifyFlashcardTextarea" onChange={sentenceTwo} placeholder={flashcardSecond} required></textarea>
            </div>
            <div className="flashcardModifyIcons">
                <div className="modifyIcon" className="accept" onClick={modifySentence}></div>
                <div className="modifyIcon" className="decline" onClick={toggleClass}></div>
            </div>
        </div>
    )
}