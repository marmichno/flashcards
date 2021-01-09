import {useState} from 'react';

export const Flashcards = ({flashCards, getId}) =>{

    let backgroundColors = ['#252668', '#1c1e69', '#191c66', '#3339ce', '#2025b1', '#3a3eb3', '#181b6e', '#0f1155', '#151749',
     '#3036f0', '#0006ac', '#101372', '#3439b4', '#1f27ff', '#090b33', '#1e2057'];

    let arrayContainers = ['container'];
    let flashCardsArray = [[]];
    let x = 0;
    let y = 0;



    flashCards.map((value, index) => {
        if(flashCardsArray[x].length === 16){
            console.log(flashCardsArray[1].length);
            x++;
            flashCardsArray.push([]);
            flashCardsArray[x].push(value);
            arrayContainers.push('container');
        }else if(flashCardsArray[x].length === 12 && x == 0){
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
            arrayContainers.map((value, index) =>{
                return( <div className="flashcardsContainer">
                    {
                flashCardsArray[y].map((value, index) => {
                    if(index % 15 === 0 && index != 0 && y !== 0){
                        y++;
                    }else if(index % 11 === 0 && index != 0 && y === 0){
                        y++;
                    }
                    if(index === 0 && y === 0){
                        return(
                        <>
                         <div></div><div></div><div></div>
                         <div onClick={getId} style={{backgroundColor: backgroundColors[index]}} className="flashcard" data-index={value.id}><div data-index={value.id}>{value.firstSentence}</div></div>
                         <div></div>
                        </>
                        )
                    }
                    return <div onClick={getId} style={{backgroundColor: backgroundColors[index]}} className="flashcard" data-index={value.id}><div data-index={value.id}>{value.firstSentence}</div></div>

                    
                })
                    }
                </div>
            )
            })
        }
        </>
        )
}