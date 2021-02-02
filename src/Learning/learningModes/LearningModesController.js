import {useState, useEffect} from 'react';
import {getCategoryFlashcards} from '../../requests/learningRequests/getCategoryFlashcards';
import { useHistory } from "react-router-dom";
import {Flashcard} from './Flashcard';
import './flashcardsMode.css';

export const LearningModesController = (state) =>{

    let categoryIndex = state.location.state.categoryIndex; //categoryIndex from showCategories saved in location state {router}
    let restartProgress = state.location.state.restartProgress;

    let history = useHistory(); 


    //restart progress and sets restart to false after first trigger
    useEffect(() => {
        if(restartProgress === true){
            getCategoryFlashcards(categoryIndex).then(result => {

                const location = {
                    pathname: '/learn-choose-category/learning',
                    state: {
                        categoryIndex:categoryIndex,
                        restartProgress:false
                    }
                }
                
                history.replace(location);

            })
        }else{
            return null;
        }

    }, [])  

        return(
            <Flashcard categoryIndex={categoryIndex}/>
        )

}