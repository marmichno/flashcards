import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

export const ShowCategoryFlashcards = ({categoryIndex}) => {
    
    const [category, setCategory] = useState();


    //saving clicked category index to state
    useEffect(() => {
        setCategory(parseInt(categoryIndex));
    }, [categoryIndex])

    return(
        <Link to={{
            pathname:'/editFlashcards',
            state: {
                categoryIndex:category
            }
            }}>
                <div className="categoryShowFlashcards">
                    <div className="categoryFlashcards">     
                        <div className="categoryFlashcardsIcon"></div>
                        <p className="iconText">Show category flashcards</p>
                    </div>
                </div>
        </Link>
    )
}