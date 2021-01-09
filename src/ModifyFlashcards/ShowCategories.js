import React, {useEffect, useState} from 'react';
import {addCategoryRequest} from './categoriesRequests/addCategoryRequest';
import {deleteCategoryRequest} from './categoriesRequests/deleteCategoryRequest';
import {getCategoriesRequest} from './categoriesRequests/getCategoryRequest';
import {AddCategory} from './categoriesComponents/AddCategory';
import {Categories} from './categoriesComponents/Categories';
import {EditCategory} from './categoriesComponents/EditCategory';
import {DeleteCategory} from './categoriesComponents/DeleteCategory';
import {ShowCategoryFlashcards} from './categoriesComponents/ShowCategoryFlashcards';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './categories.css'

export const ShowCategories = () => {

    const [flashCardsCategories, setFlashCardsCategories] = useState(""); // saving categories from get request
    const [categoryIndex, setCategoryIndex] = useState(1);

    //show categories get request
    const refreshCategories = async () =>{
        getCategoriesRequest().then(result => {
            setFlashCardsCategories(result);
        });
    }

    // sets category for default after deleting category
    const defaultCategoryIndex = () =>{
        setCategoryIndex(1)
    }

    //getting categories on first load
    useEffect(() =>{
        refreshCategories();
    }, [])


    //deleting category by id
    const deleteCategory = async (e) =>{
        await deleteCategoryRequest(e.target.dataset.index)
        refreshCategories();
    }

    //saves clicked category index
    const saveCategoryIndex = (e) => {
        setCategoryIndex(e.target.dataset.index);
    }


    if(flashCardsCategories.length > 0){
        return(
        <div className="categoriesMainContainer">

            <div className="categoriesContainer">   
                <div className="carousel">
                    <Categories flashCardsCategories={flashCardsCategories} saveCategoryIndex={saveCategoryIndex} refreshCategories={refreshCategories}/>
                </div>
                <div className="addCategory">
                    <DeleteCategory categoryIndex={categoryIndex} refreshCategories={refreshCategories} defaultCategory={defaultCategoryIndex}/>
                    <AddCategory refreshCategories={refreshCategories}/>
                    <ShowCategoryFlashcards categoryIndex={categoryIndex}/>
                </div>
            </div>

            <div className="categoryPreviewContainer">
                <EditCategory categories={flashCardsCategories} categoryIndex={categoryIndex} refreshCategories={refreshCategories} defaultCategory={defaultCategoryIndex}/>
            </div>
        </div>
        )
        }else{
            return null;
        }
    
}
