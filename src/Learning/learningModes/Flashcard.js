import {useState} from 'react';

export const FlashcardLearning = (state) =>{

    let categoryIndex = state.location.state.categoryIndex; //categoryIndex from showCategories saved in location state {router}
    

    return(
        <h1>{categoryIndex}</h1>
    )
}