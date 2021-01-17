import {deleteSentence} from '../flashcardsRequests/deleteSentence';
import {ModifyFlashcards} from './ModifyFlashcards';
import {useState, useEffect} from 'react';

export const FlashcardPreview = ({categoryIndex, flashcardId, flashcards, refreshFlashcards, showModifyPopup}) => {

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

        //delete request / modify animation
        const deleteFlashcard = async () => {
            await deleteSentence(flashcardId);
            refreshFlashcards();
            showModifyPopup();
        }

        
        if(flashcardId === undefined || flashcards === undefined || flashcardToPreview === undefined){
            return null;
        }

    return(
        <div className="cardPreview">
            <div className="card">
                <div className="firstSentencePreview"><h2>{flashcardToPreview.firstSentence}</h2></div>
                <div className="secondSentencePreview"><p>{flashcardToPreview.secondSentence}</p></div>
                <ModifyFlashcards categoryIndex={categoryIndex} showInputs={showModifyInputs} refreshFlashcards={refreshFlashcards} flashcardId={flashcardId} flashcardFirst={flashcardToPreview.firstSentence} flashcardSecond={flashcardToPreview.secondSentence}/>
            </div>

            <div className="flashcardPreviewOptions">
                <div onClick={deleteFlashcard} className="flashcardPreviewDelete"><div className="previewDeleteIcon"></div><p className="iconText">delete</p></div>
                <div className="flashcardPreviewModify"><div className="previewModifyIcon" onClick={switchModifyInputs}></div><p className="iconText">modify</p></div>
            </div>
        </div>
    )
}