import '../categories.css'
import {putCategoryRequest} from '../categoriesRequests/putCategoryRequest';
import {useState, useEffect} from 'react';
import {DeleteCategory} from '../categoriesComponents/DeleteCategory';
import {ShowCategoryFlashcards} from '../categoriesComponents/ShowCategoryFlashcards';
import {AddCategory} from '../categoriesComponents/AddCategory';


export const EditCategory = ({categories, categoryIndex, refreshCategories, defaultCategory}) => {

    const [categoryName, setCategoryName] = useState("");

    //saves category index / resets to default after deleting category
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

    //modify popup animation
    const showModifyCategoryPopup = () =>{
        let previewContainer = document.querySelector('.categoryModifyPopup');
        previewContainer.classList.toggle('displaynone');
    }

    return(
            <div className="categoryModifyPopup popup">
                <div className="popupBackground" onClick={showModifyCategoryPopup}></div>
                <div key={categoryIndex} className="editCategoryContainer swagRoll">
                    <div className="categoryPreview">
                        <div className="front">
                        </div>
                        <div className="back">
                            <h1>{categoryToPreview.categoryName}</h1>
                        </div>
                    </div>


                        <div className="categoryModifyInput">
                            <div className="categoryModifyInputContainer">
                                <input placeholder={`from ${categoryToPreview.categoryName}`} onChange={saveCategoryName}></input>
                                <div onClick={changeCategoryName}>change name</div>
                            </div>
                        </div>
                    </div>
                <DeleteCategory categoryIndex={categoryIndex} refreshCategories={refreshCategories} defaultCategory={defaultCategory}/>
                <ShowCategoryFlashcards categoryIndex={categoryIndex}/>
        </div>
    )
}