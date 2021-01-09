import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../categories.css';

export const Categories = ({flashCardsCategories, saveCategoryIndex}) => {

    const [carousel, setCarousel] = useState(0);

    let backgroundColors = ['#252668', '#1c1e69', '#191c66', '#3339ce', '#2025b1', '#3a3eb3'];

    let flashcardsCategoriesArray = [[]];
    let x = 0;

    flashCardsCategories.map((value, index) => {
        if(index % 5 === 0 && index != 0){
            x++;
            flashcardsCategoriesArray.push([]);
            flashcardsCategoriesArray[x].push(value);
        }else{
            flashcardsCategoriesArray[x].push(value);
        }
    })

    console.log(flashcardsCategoriesArray);

    const carouselNext = (e) =>{

        let direction = e.target.dataset.direction;

        if(direction === "left"){
            if(carousel === 0){
                return;
            }else{
                setCarousel(carousel - 1);
            }
        }else if(direction === "right"){
            if(carousel === flashcardsCategoriesArray.length - 1){
                return
            }else{
                setCarousel(carousel + 1);
            }
        }
    }

    useEffect(() => {
        console.log(carousel);
    }, [carousel])

    return(
        <>
        <div className="categoryCarouselArrow arrowLeft" data-direction="left" onClick={carouselNext}></div>
            <div key={carousel} className="categoriesCarousel slideFromRight"> 
                {
                flashcardsCategoriesArray[carousel].map((value, index) => {
                    return <div onClick={saveCategoryIndex} style={{backgroundColor: backgroundColors[index]}} className="category" data-index={value.id}><p>{value.categoryName}</p></div>
                })
                }
            </div>
        <div className="categoryCarouselArrow arrowRight" data-direction="right" onClick={carouselNext}></div>
        </>
    )
}