import '../categories.css'
import {putCategoryRequest} from '../categoriesRequests/putCategoryRequest';
import {useState, useEffect} from 'react';


export const EditCategory = ({categories, categoryIndex, refreshCategories, defaultCategory}) => {

    const [categoryName, setCategoryName] = useState("");

    let categoryToPreview = categories.filter(value => {
        if(value.id == categoryIndex){
            return true;
        }else{
            return false;
        }
    })[0];


    //changes category name
    const changeCategoryName = async () => {
        await putCategoryRequest(categoryIndex, categoryName);
        refreshCategories();
    }

    //useState placeholder for input value
    const saveCategoryName = (e) =>{
        setCategoryName(e.target.value);
    }

    return(
        <div className="editCategoryContainer">
            <div className="categoryPreview">
                <h1>{categoryToPreview.categoryName}</h1>
            </div>


                <div className="categoryModifyInput">
                    <div className="categoryModifyInputContainer">
                        <input placeholder={`from ${categoryToPreview.categoryName}`} onChange={saveCategoryName}></input>
                        <div onClick={changeCategoryName}>change name</div>
                    </div>
                </div>
                
            </div>
    )
}