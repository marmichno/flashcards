import {useState} from 'react';

export const Flashcards = ({flashCards, getId, showAddPopup}) =>{

    let arrayContainers = ['container'];
    let flashCardsArray = [[]];
    let x = 0;
    let y = 0;

    //creating array for grid display, when there is more than 9 elements new container is added for infinite scroll
    flashCards.map((value, index) => {
        if(flashCardsArray[x].length === 9){
            console.log(flashCardsArray[1].length);
            x++;
            flashCardsArray.push([]);
            flashCardsArray[x].push(value);
            arrayContainers.push('container');
        }else if(flashCardsArray[x].length === 8 && x == 0){
            x++;
            flashCardsArray.push([]);
            flashCardsArray[x].push(value);
            arrayContainers.push('container');
        }
        else{
            flashCardsArray[x].push(value);
        }
    })

    return(
        <>
        {
        arrayContainers.map((value, index) => {
            return(
                <div className="flashcardsMainContainer">
                 <div className="flashcardsContainer">
                {
                    flashCardsArray[y].map((value, index) => {
                        if(index % 8 === 0 && index != 0 && y !== 0){
                            y++;
                        }else if(index % 7 === 0 && index != 0 && y === 0){
                            y++;
                        }
                        if(index === 0 && y === 0){
                            return(
                            <>
                             <div className="addFlashcard" onClick={showAddPopup}><div className="addFlashcardIconContainer"></div></div>
                             <div onClick={getId} className="flashcard" data-index={value.id}><div data-index={value.id}>{value.firstSentence}</div></div>
                            </>
                            )
                        }
                        return <div onClick={getId} className="flashcard" data-index={value.id}><div data-index={value.id}>{value.firstSentence}</div></div>
                }
                )
            }
            </div>
            </div>
            )
        })
    }
     </>
    )
}