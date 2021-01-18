import {useState} from 'react';
import {addFlashcard} from '../flashcardsRequests/addFlashcard';

export const AddFlashcard = ({refreshFlashcards, categoryIndex, emptyContainer}) =>{

    const [addSentenceOne, setAddSentenceOne] = useState("");
    const [addSentenceTwo, setAddSentenceTwo] = useState("");

    // container label gets refreshed after changes
    let firstSentence = document.querySelector('.firstSentenceContainer label span p');
    let secondSentence = document.querySelector('.secondSentenceContainer label span p');
    firstSentence.innerText = "first sentence";
    secondSentence.innerText = "second sentence";

    // saving input text to add new flashcard
    const sentenceOne = (e) => {
        setAddSentenceOne(e.target.value);
    }

    // saving second input text to add new flashcard
    const sentenceTwo = (e) => {
        setAddSentenceTwo(e.target.value);
    }

    // saving sentence combined with two inputs to add to database
    const saveNewSentence = async () => {
        
        if(addSentenceOne.length < 1){
            firstSentence.innerText = "cannot be null";
        }else if(addSentenceTwo.length < 1){
            secondSentence.innerText = "cannot be null";
        }else if(addSentenceOne.length > 11){
            firstSentence.innerText = "sentence too long";
        }else if(addSentenceTwo.length > 200){
            secondSentence.innerText = "sentence too long";
        }else{
            await addFlashcard(addSentenceOne, addSentenceTwo, categoryIndex);
            refreshFlashcards();
        }

    }

    
    if(emptyContainer){
        return(
            <div class="form">
                <div className="firstSentenceContainer formContainer">
                    <input type="text" autocomplete="off" name="firstSentence" onChange={sentenceOne} className="firstSentenceInput" required></input>
                    <label for="firstSentence" className="label-name">
                        <span className="contentName"><p>first sentence</p></span>
                    </label>
                </div>
    
                <div className="secondSentenceContainer formContainer">
                    <textarea autocomplete="off" name="secondSentence" onChange={sentenceTwo} className="secondSentenceInput" required></textarea>
                    <label for="secondSentence" className="label-name textarea">
                        <span className="contentName"><p>second sentence</p></span>
                    </label>
                </div>
                <div className="addIcon" onClick={saveNewSentence}></div>
            </div>
        )
    }else{
        return(
            <div class="form">
                <div className="firstSentenceContainer formContainer">
                    <input type="text" autocomplete="off" name="firstSentence" onChange={sentenceOne} className="firstSentenceInput" required></input>
                    <label for="firstSentence" className="label-name">
                        <span className="contentName"><p>first sentence</p></span>
                    </label>
                </div>
    
                <div className="secondSentenceContainer formContainer">
                    <textarea autocomplete="off" name="secondSentence" onChange={sentenceTwo} className="secondSentenceInput" required></textarea>
                    <label for="secondSentence" className="label-name textarea">
                        <span className="contentName"><p>second sentence</p></span>
                    </label>
                </div>
                <div className="addIcon" onClick={saveNewSentence}></div><p className="addIconText">Add new sentence</p>
            </div>
        )
    }
    
}