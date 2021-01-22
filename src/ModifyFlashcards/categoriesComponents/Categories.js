import {useState} from 'react';
import '../categories.css';

export const Categories = ({flashCardsCategories, saveCategoryIndex}) => {

    const [carousel, setCarousel] = useState(0);


    let flashcardsCategoriesArray = [[]];
    let x = 0;

    
    //creating new array to manage how many categories has to be displayed
    flashCardsCategories.map((value, index) => {
        if(index % 5 === 0 && index !== 0){
            x++;
            flashcardsCategoriesArray.push([]);
            flashcardsCategoriesArray[x].push(value);
        }else{
            flashcardsCategoriesArray[x].push(value);
        }

        return value;
    })

    // covers carousel animations and manages which array of categories has to be displayed
    const carouselNext = (e) =>{

        let direction = e.target.dataset.direction;

        if(direction === "left"){
            if(carousel === 0){
                return;
            }else{
                let divs = document.querySelector(".categoriesCarousel");
                divs.classList.add('goDown');
                setTimeout(() => {
                    setCarousel(carousel - 1);
                }, 400);
            }
        }else if(direction === "right"){
            if(carousel === flashcardsCategoriesArray.length - 1){
                return
            }else{
                let divs = document.querySelector(".categoriesCarousel");
                divs.classList.add('goDown');
                setTimeout(() => {
                    setCarousel(carousel + 1);
                }, 400);
                
            }
        }
    }

    if(flashcardsCategoriesArray[carousel] === undefined){
        setCarousel(carousel - 1);
    };

    if(flashcardsCategoriesArray[carousel] !== undefined){
    return(
        <>
        <div className="categoryCarouselArrow arrowLeft" data-direction="left" onClick={carouselNext}></div>
            <div key={carousel} className="categoriesCarousel slideFromRight"> 
                {
                flashcardsCategoriesArray[carousel].map((value, index) => {
                    return <div onClick={saveCategoryIndex} className="category" data-index={value.id}><p data-index={value.id}>{value.categoryName}</p></div>
                })
                }
            </div>
        <div className="categoryCarouselArrow arrowRight" data-direction="right" onClick={carouselNext}></div>
        </>
    )
    }else{
        return null;
    }
}