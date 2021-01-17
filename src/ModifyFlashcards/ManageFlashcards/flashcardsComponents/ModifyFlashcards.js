import {putFlashcard} from '../flashcardsRequests/putFlashcard';
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
        

        <div class="modifyFlashcardForm">

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
            </div>
        </div>
    )
}