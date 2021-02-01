import {useState, useEffect} from 'react';
import {getCategoryFlashcards} from '../../requests/learningRequests/getCategoryFlashcards';
import { useHistory } from "react-router-dom";
import {Flashcard} from './Flashcard';
import './flashcardsMode.css';

export const LearningModesController = (state) =>{

    let categoryIndex = state.location.state.categoryIndex; //categoryIndex from showCategories saved in location state {router}
    let restartProgress = state.location.state.restartProgress;
    let mode = state.location.state.mode;

    let history = useHistory(); 

    useEffect(() => {
        if(restartProgress === true){
            getCategoryFlashcards(categoryIndex).then(result => {

                const location = {
                    pathname: '/learn-choose-category/learning',
                    state: {
                        categoryIndex:categoryIndex,
                        restartProgress:false,
                        mode:mode
                    }
                }
                
                history.replace(location);

            })
        }else{
            return null;
        }

    }, [])  

    if(mode === "flashcard"){
        return(
            <Flashcard categoryIndex={categoryIndex}/>
        )
    }

}