import React, {useEffect, useState} from 'react';
import {addFlashcard} from './flashcardsRequests/addFlashcard';
import {deleteSentence} from './flashcardsRequests/deleteSentence';
import {getFlashcards} from './flashcardsRequests/getFlashcards';
import {Flashcards} from './flashcardsComponents/Flashcards';
import {AddFlashcard} from './flashcardsComponents/AddFlashcard';
import {FlashcardPreview} from './flashcardsComponents/FlashcardPreview';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './flashcards.css';


export const ShowFlashcards = (state) =>{

const [flashCards, setFlashCards] = useState("");
const [clickedSentenceId, setClickedSentenceId] = useState();
const [flashcardPreviewId, setFlashcardPreviewId] = useState(undefined);
const [previouslyClicked, setPreviouslyClicked] = useState('');

let categoryIndex = state.location.state.categoryIndex;


    // gets all flashcards / refreshes page after change
    const refreshFlashcards = () => {
        getFlashcards(categoryIndex).then(result => {
            setFlashCards(result);
        });
    }

    // setting default flashcard id to first element so after changing categorie flashcardpreview will show first item
    useEffect(() => {
        setFlashcardPreviewId(() => {
            if(flashCards.length >= 1){
                if(previouslyClicked !== ''){
                    previouslyClicked.classList.remove('toggled');
                    setPreviouslyClicked('');
                }
                return flashCards[0].id;
            }else{
                return undefined;
            }});
    }, [flashCards]);

    //gets flashcards on first pageload
    useEffect(() => {
        refreshFlashcards();
    }, []);

    //save flashcard preview id
    const flashcardId = (e) => {
        if(previouslyClicked !== ''){previouslyClicked.classList.toggle('toggled')}
        setFlashcardPreviewId(e.target.dataset.index);
        showModifyPopup();
    }

    const showModifyPopup = () => {
        let previewContainer = document.querySelector('.flashcardPreviewPopup');
        previewContainer.classList.toggle('displaynone');
        
    }

    const showAddPopup = () => {
        let previewContainer = document.querySelector('.flashcardAddPopup');
        previewContainer.classList.toggle('displaynone');
    }

    if(flashCards.length > 0){
    return(
        <>
            <div className="flashcardAddPopup popup">
                <div className="popupBackground" onClick={showAddPopup}></div>
                    <AddFlashcard refreshFlashcards={refreshFlashcards} categoryIndex={categoryIndex}/>
            </div>

            <div className="flashcardPreviewPopup popup">
                <div className="popupBackground" onClick={showModifyPopup}></div>
                <div className="flashcardPreviewContainer">
                        <FlashcardPreview flashcards={flashCards} flashcardId={flashcardPreviewId} refreshFlashcards={refreshFlashcards} showModifyPopup={showModifyPopup} emptyContainer={false}/>
                </div>
            </div>
            
            <Flashcards flashCards={flashCards} getId={flashcardId} showAddPopup={showAddPopup}/>
        </>
    )
    }else if(flashCards.status === 404){
        return(
            <div className="flashcardsEmptyContainer">
                <div className="flashcardsEmpty">
                    <AddFlashcard refreshFlashcards={refreshFlashcards} categoryIndex={categoryIndex} emptyContainer={true}/>
                </div>
            </div>
        )
    }else{
        return null;
    } 

    return null;

}