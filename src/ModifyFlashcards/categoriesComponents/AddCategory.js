import {useState} from 'react';
import {addCategoryRequest} from '../../requests/categoriesRequests/addCategoryRequest';

export const AddCategory = ({refreshCategories}) => {

    const [addCategory, setAddCategory] = useState(""); // saving input value for adding categories

    //adding new category to database post request, rerendering visible categories
    const saveNewCategory = async () => {
        let response = await addCategoryRequest(addCategory);
        refreshCategories();
    }

    //saving input text to add new category
    const typeCategory = (e) => {
        setAddCategory(e.target.value);
    }

    return (
        <div className="categoryForm">
            <div className="firstSentenceContainer formContainer">
                <input type="text" autocomplete="off" name="category" onChange={typeCategory} className="firstSentenceInput" required></input>
                <label for="category" className="label-name">
                    <span className="contentName"><p>category name</p></span>
                </label>
            </div>
            <div className="addIconCategory" onClick={saveNewCategory}></div><p className="addIconText">Add new category</p>
        </div>
    )
}