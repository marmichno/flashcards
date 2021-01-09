import {deleteSentence} from '../flashcardsRequests/deleteSentence';
import {ModifyFlashcards} from './ModifyFlashcards';
import {useState, useEffect} from 'react';

export const FlashcardPreview = ({flashcardId, flashcards, refreshFlashcards}) => {

    const [showModifyInputs, setShowModifyInputs] = useState(false);

    //displays or hides modify inputs
    const switchModifyInputs = () =>{
        const toggleFlag = (showModifyInputs) => {
            let toggle = showModifyInputs ? false : true;
            return toggle;
        }
        
        setShowModifyInputs(toggleFlag(showModifyInputs))
    }

        //finds clicked flashcard
        let flashcardToPreview = flashcards.filter(value => {
            if(value.id == flashcardId){
                return true;
            }else{
                return false;
            }
        })[0];

        const deleteFlashcard = async () => {
            await deleteSentence(flashcardId);
            refreshFlashcards();
        }

        if(flashcardId === undefined || flashcards === undefined || flashcardToPreview === undefined){
            return null;
        }

    return(
        <div className="cardPreview">
            <div className="card">
                <div className="frontOfTheCard"><p>First sentence:</p><h2>{flashcardToPreview.firstSentence}</h2></div>
                <div className="backOfTheCard"><p>Second sentence:</p><p>{flashcardToPreview.secondSentence}</p></div>
                <ModifyFlashcards showInputs={showModifyInputs} refreshFlashcards={refreshFlashcards} flashcardId={flashcardId} flashcardFirst={flashcardToPreview.firstSentence} flashcardSecond={flashcardToPreview.secondSentence}/>
            </div>

            <div className="flashcardPreviewOptions">
                <div onClick={deleteFlashcard} className="flashcardPreviewDelete"><div className="previewDeleteIcon"></div><p className="iconText">delete</p></div>
                <div className="flashcardPreviewModify"><div className="previewModifyIcon" onClick={switchModifyInputs}></div><p className="iconText">modify</p></div>
            </div>
        </div>
    )
}