import React, {useEffect, useState} from 'react';
import {addCategoryRequest} from './categoriesRequests/addCategoryRequest';
import {deleteCategoryRequest} from './categoriesRequests/deleteCategoryRequest';
import {getCategoriesRequest} from './categoriesRequests/getCategoryRequest';
import {Categories} from './categoriesComponents/Categories';
import {EditCategory} from './categoriesComponents/EditCategory';
import {AddCategory} from './categoriesComponents/AddCategory';
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
        showModifyCategoryPopup();
    }

    const showModifyCategoryPopup = () =>{
        let previewContainer = document.querySelector('.categoryModifyPopup');
        previewContainer.classList.toggle('displaynone');
    }


    if(flashCardsCategories.length > 0){
        return(
        <div className="categoriesMainContainer">

            <div className="categoriesContainer">   
                <div className="carousel">
                    <Categories flashCardsCategories={flashCardsCategories} saveCategoryIndex={saveCategoryIndex} refreshCategories={refreshCategories} categoryIndex={categoryIndex}/>
                </div>
            </div>

            <div className="addCategoryContainer">
                <AddCategory refreshCategories={refreshCategories}/>
            </div>

                <EditCategory categories={flashCardsCategories} categoryIndex={categoryIndex} refreshCategories={refreshCategories} defaultCategory={defaultCategoryIndex}/>
        </div>
        )
        }else{
            return null;
        }
    
}
