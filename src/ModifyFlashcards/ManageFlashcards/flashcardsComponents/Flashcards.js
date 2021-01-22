export const Flashcards = ({flashCards, getId, showAddPopup}) =>{

    let arrayContainers = ['container'];
    let flashCardsArray = [[]];
    let x = 0; //number of elements in container
    let y = 0; //number of containers

    //creating array for grid display, when there is more than 9 elements new container is added for infinite scroll
    flashCards.map((value, index) => {
        if(flashCardsArray[x].length === 9){
            x++;
            flashCardsArray.push([]);
            flashCardsArray[x].push(value);
            arrayContainers.push('container');
        }else if(flashCardsArray[x].length === 8 && x === 0){ //first container added when 8 elements are in array because first div is addflashcard not flashcard
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
                        if(index % 8 === 0 && index !== 0 && y !== 0){
                            y++;
                        }else if(index % 7 === 0 && index !== 0 && y === 0){
                            y++;
                        }
                        if(index === 0 && y === 0){ //first element addFlashcard then flashcard
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
        }
        )
    }
     </>
    )
}