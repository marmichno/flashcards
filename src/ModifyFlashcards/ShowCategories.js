import React, {useEffect, useState} from 'react';
import {getCategoriesRequest} from '../requests/categoriesRequests/getCategoryRequest';
import {Categories} from './categoriesComponents/Categories';
import {EditCategory} from './categoriesComponents/EditCategory';
import {AddCategory} from './categoriesComponents/AddCategory';
import './categories.css'

export const ShowCategories = () => {

    const [flashCardsCategories, setFlashCardsCategories] = useState(""); // saving categories from get request
    const [categoryIndex, setCategoryIndex] = useState("");

    // sets category for default after deleting category
    const defaultCategoryIndex = async () =>{
        let response = await getCategoriesRequest();
        setCategoryIndex(response[0].id);
    }

    //show categories get request
    const refreshCategories = async () =>{
        let response = await getCategoriesRequest();
        setFlashCardsCategories(response);
    }

    useEffect(() =>{
        console.log(categoryIndex);
    }, [categoryIndex])

    //getting categories / setting default index on first load
    useEffect(() =>{
        defaultCategoryIndex();
        refreshCategories();
    }, [])

    //saves clicked category index
    const saveCategoryIndex = (e) => {
        setCategoryIndex(e.target.dataset.index);
        showModifyCategoryPopup();
    }

    //adding popup css
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
