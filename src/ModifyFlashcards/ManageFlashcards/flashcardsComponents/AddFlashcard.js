import {useState} from 'react';
import {addFlashcard} from '../../../requests/flashcardsRequests/addFlashcard';

export const AddFlashcard = ({refreshFlashcards, categoryIndex, emptyContainer}) =>{

    const [addSentenceOne, setAddSentenceOne] = useState("");
    const [addSentenceTwo, setAddSentenceTwo] = useState("");

    // saving input text to add new flashcard
    const sentenceOne = (e) => {
        
    let firstSentence = document.querySelector('.firstSentenceContainer label span p');
    let secondSentence = document.querySelector('.secondSentenceContainer label span p');

        if(firstSentence.innerText != "first sentence"){
            firstSentence.innerText = "first sentence";
        };

        setAddSentenceOne(e.target.value);
    }

    // saving second input text to add new flashcard
    const sentenceTwo = (e) => {          
        
    let firstSentence = document.querySelector('.firstSentenceContainer label span p');
    let secondSentence = document.querySelector('.secondSentenceContainer label span p');

        if(secondSentence.innerText != "second sentence"){
            secondSentence.innerText = "second sentence";
        };

        setAddSentenceTwo(e.target.value);
    }

    // saving sentence combined with two inputs to add to database
    const saveNewSentence = async () => {

        let firstSentence = document.querySelector('.firstSentenceContainer label span p');
        let secondSentence = document.querySelector('.secondSentenceContainer label span p');

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
            <div className="form">
                <div className="firstSentenceContainer formContainer">
                    <input type="text" autoComplete="off" name="firstSentence" onChange={sentenceOne} className="firstSentenceInput" required></input>
                    <label htmlFor="firstSentence" className="label-name">
                        <span className="contentName"><p>first sentence</p></span>
                    </label>
                </div>
    
                <div className="secondSentenceContainer formContainer">
                    <textarea autoComplete="off" name="secondSentence" onChange={sentenceTwo} className="secondSentenceInput" required></textarea>
                    <label htmlFor="secondSentence" className="label-name textarea">
                        <span className="contentName"><p>second sentence</p></span>
                    </label>
                </div>
                <div className="addIcon" onClick={saveNewSentence}></div><p className="addIconText">Add new sentence</p>
            </div>
        )
    }else{

        return(
            <div className="form">
                <div className="firstSentenceContainer formContainer">
                    <input type="text" autoComplete="off" name="firstSentence" onChange={sentenceOne} className="firstSentenceInput" required></input>
                    <label htmlFor="firstSentence" className="label-name">
                        <span className="contentName"><p>first sentence</p></span>
                    </label>
                </div>
    
                <div className="secondSentenceContainer formContainer">
                    <textarea autoComplete="off" name="secondSentence" onChange={sentenceTwo} className="secondSentenceInput" required></textarea>
                    <label htmlFor="secondSentence" className="label-name textarea">
                        <span className="contentName"><p>second sentence</p></span>
                    </label>
                </div>
                <div className="addIcon" onClick={saveNewSentence}></div><p className="addIconText">Add new sentence</p>
            </div>
        )
    }
    
}