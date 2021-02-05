import {useState} from 'react';
import {addFlashcard} from '../../../requests/flashcardsRequests/addFlashcard';

export const AddFlashcard = ({refreshFlashcards, categoryIndex, emptyContainer}) =>{

    const [addSentenceOne, setAddSentenceOne] = useState("");
    const [addSentenceTwo, setAddSentenceTwo] = useState("");

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

        const response = await addFlashcard(addSentenceOne, addSentenceTwo, categoryIndex);

        if(response.status === 200){
            refreshFlashcards();
        }else{
            return null;
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