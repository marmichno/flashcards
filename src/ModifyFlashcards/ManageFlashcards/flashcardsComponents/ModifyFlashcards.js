import {putFlashcard} from '../../../requests/flashcardsRequests/putFlashcard';
import {useState, useEffect} from 'react';

export const ModifyFlashcards = ({categoryIndex, refreshFlashcards, flashcardId, flashcardFirst, flashcardSecond, showInputs}) => {

    const [modifySentenceOne, setModifySentenceOne] = useState("");
    const [modifySentenceTwo, setModifySentenceTwo] = useState("");

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
        await putFlashcard(modifySentenceOne, modifySentenceTwo, flashcardId, categoryIndex)
        refreshFlashcards();
    }

    //modify flashcardform animation
    useEffect(() => {
        const modifyForm = document.querySelector('.modifyFlashcardForm');

        if(showInputs === false){
            modifyForm.classList.remove('slideInFromBottom');
            modifyForm.classList.add('slideInFromTop');
            setTimeout(() => {
                modifyForm.classList.remove('slideInFromTop');
            }, 700);
        }else{
            modifyForm.classList.add('slideInFromBottom');
        }

    }, [showInputs])

    return(
        
        <div className="modifyFlashcardForm">

            <div className="firstSentenceContainerModify">
                <label htmlFor="firstSentence">
                    <span><p>first sentence</p></span>
                </label>
                <input type="text" autoComplete="off" name="firstSentence" className="modifyFlashcardInput" onChange={sentenceOne} placeholder={flashcardFirst} required></input>
            </div>

            <div className="secondSentenceContainerModify">
                <label htmlFor="secondSentence">
                    <span><p>second sentence</p></span>
                </label>
                <textarea autoComplete="off" name="secondSentence" className="modifyFlashcardTextarea" onChange={sentenceTwo} placeholder={flashcardSecond} required></textarea>
            </div>
            <div className="flashcardModifyIcons">
                <div className="modifyIcon" className="accept" onClick={modifySentence}></div>
            </div>
        </div>
    )
}