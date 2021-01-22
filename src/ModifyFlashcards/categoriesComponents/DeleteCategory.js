import {deleteCategoryRequest} from '../../requests/categoriesRequests/deleteCategoryRequest';

export const DeleteCategory = ({categoryIndex, refreshCategories, defaultCategory}) => {

    //deletes choosen category then refreshes categories to preview changes
    const deleteCategory = async () =>{
        await deleteCategoryRequest(categoryIndex);
        refreshCategories();
        defaultCategory();
    }

    return(
        <div className="categoryDeleteContainer">
            <div className="categoryDelete" onClick={deleteCategory}>
                <div className="deleteCategoryIcon"></div>
                <p className="iconText">Delete category</p>
            </div>
        </div>
    )
}