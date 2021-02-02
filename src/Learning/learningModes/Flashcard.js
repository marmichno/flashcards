import {useState, useEffect} from 'react';
import {getNextFlashcard} from '../../requests/learningRequests/getNextFlashcard';
import {getCurrentFlashcard} from '../../requests/learningRequests/getCurrentFlashcard';

export const Flashcard = () => {

    const [currentFlashcard, setCurrentFlashcard] = useState(getCurrentFlashcard());

    //handles on click to get new flashcard
    const nextFlashcard = () =>{
        getNextFlashcard().then(result =>{
            setCurrentFlashcard(result);
        })
    }

    //set current (from previous session or first from new session) flashcard
    useEffect(() => {
        getCurrentFlashcard().then(result =>{
            setCurrentFlashcard(result);
        })
    }, []);

    //animation - flipping flashcard on click
    const flip = () =>{
        let flashcard = document.querySelector('.flashcardLearningModeMainContainer .editCategoryContainer');

        if(flashcard.classList[1] === "flip"){
            flashcard.classList.remove("flip");
            flashcard.classList.toggle("firstFlip");
        }else{
            flashcard.classList.remove("firstFlip");
            flashcard.classList.toggle('flip');
        }
    }
    
    return(
        <div className="flashcardLearningModeMainContainer">
                <div className="editCategoryContainer" onClick={flip}>
                    <div className="categoryPreview">
                        <div className="front">
                            <h1>{currentFlashcard.firstSentence}</h1>
                        </div>
                        <div className="back">
                            <h1>{currentFlashcard.secondSentence}</h1>
                        </div>
                    </div>
                </div>

                <div className="learningFlashcardButtonsContainer">
                    <div onClick={nextFlashcard}>next</div>
                </div>
        </div>
    )
}