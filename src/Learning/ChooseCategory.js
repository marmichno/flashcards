import {useState, useEffect} from 'react';
import {getCategoriesRequest} from '../requests/categoriesRequests/getCategoryRequest';
import {Link} from 'react-router-dom';
import './chooseCategory.css';

export const ChooseCategory = () => {

    const [categories, setCategories] = useState("");
    const [choosenCategory, setChoosenCategory] = useState(0);

    useEffect(() => {
        getCategoriesRequest().then(result => {
            setCategories(result);
        });
    },[]);

    const setChoosen = (e) => {
        setChoosenCategory(e.target.options[e.target.selectedIndex].value);
    }

    if(categories.length > 0){
        return(
            <div className="learnChooseCategoryMainContainer">

                <div className="learnChooseCategory">
                    <h1>Choose category to learn</h1>
                    <select onChange={setChoosen}>
                        {
                            categories.map((value, index) => {
                                return <option value={value.id}>{value.categoryName}</option>
                            })
                        }
                    </select>
                    <p>or click                
                        <Link to="/editCategories">
                            <span> here </span>
                        </Link>
                     to add new ones.</p>

                </div>

                <div className="learnChooseMode">

                <Link to={{
                    pathname:'/learn-choose-category/learning',
                    state: {
                        categoryIndex:choosenCategory
                    }
                }}>
                    <div>flashcard</div>
                </Link>

                    <div>typing</div>
                    <div>one of three</div>
                </div>
            </div>
        )
    }else{
        return null;
    }

}