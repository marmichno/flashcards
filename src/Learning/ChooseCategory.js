import {useState, useEffect} from 'react';
import {getCategoriesRequest} from '../requests/categoriesRequests/getCategoryRequest';
import {getLastLearning} from '../requests/learningRequests/getLastLearning';
import {getFlashcards} from '../requests/flashcardsRequests/getFlashcards';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './chooseCategory.css';
import { toast } from 'react-toastify';

export const ChooseCategory = () => {

    const [categories, setCategories] = useState("");
    const [lastLearning, setLastLearning] = useState(false);
    const [lastLearningDate, setLastLearningDate] = useState("");
    const [restartProgress, setRestartProgress] = useState(true);
    const [choosenCategory, setChoosenCategory] = useState();
    const history = useHistory(); 

    //saves categories to state
    useEffect(() => {
        getCategoriesRequest().then(result => {
            setCategories(result);
        })
    },[]);

    //sets for the first load category as default
    useEffect(() => {
        if(categories.length > 0){
            setChoosenCategory(categories[0].id);
        }
    }, [categories]);


    //checks if user have any previous session with learning
    useEffect( async () =>{
        const request = await getLastLearning();
        const response = await request;

        if(response.status === 404){
            setLastLearning(false);
        }else{
            setLastLearning(true);

            setLastLearningDate(() => {
                let date = response.data.createdDateTime.split('');
                let arr = [];
    
                for(let i = 0; i < 19; i++){
                    if(date[i] === "T"){
                        arr.push(' ');
                    }else{
                        arr.push(date[i]);
                    }
                }
    
                return arr.join('');
                });
            }
            return response;
    }, []);

    //saving choosen category from dropdown menu
    const setChoosen = (e) => {
        setChoosenCategory(e.target.options[e.target.selectedIndex].value);
    }

    //selecting if user would like to continue previous learning session or create new one
    const selectSession = (e) =>{

        let session = document.querySelectorAll('.lastLearning div');
        session.forEach(element => element.classList.remove('learnActive'));
        e.target.classList.add('learnActive');

        if(e.target.innerHTML === "last session"){
            setRestartProgress(false);
        }else{
            setRestartProgress(true);
        }
    }


    //animation and changing location using router
    const changeLocation = async () => {

        let session = document.querySelectorAll('.lastLearning div');
        let counter = 0;
        session.forEach(result => result.classList.value === "learnActive" ? counter++ : null);

        let flashcards = await getFlashcards(choosenCategory);

        if(flashcards.status === 404){
            toast.error('Category doesnt contain any flashcards');
            return null;
        }
 
        if(counter === 1 && lastLearning === true){
            const location = {
                pathname: '/learn-choose-category/learning',
                state: {
                    categoryIndex:choosenCategory,
                    restartProgress:restartProgress
                }
            }    
            history.push(location);

        }else if(counter === 0 && lastLearning === false){
            const location = {
                pathname: '/learn-choose-category/learning',
                state: {
                    categoryIndex:choosenCategory,
                    restartProgress:restartProgress
                }
            }    
            history.push(location);
        }
    }

    //renders if user doesnt have previous learning session
    if(categories.length > 0 && lastLearning === false){
        return(
            <div className="learnChooseCategoryMainContainer">

                <div className="learnChooseCategory">
                    <h1>Choose category</h1>
                    <select onChange={setChoosen}>
                        {
                            categories.map((value, index) => {
                                return <option value={value.id}>{value.categoryName}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                    <div onClick={changeLocation}><h1>start</h1></div>
                </div>

            </div>
        )
        //renders if user have previous learning session
    }else if(categories.length > 0 && lastLearning === true){
        return(
            <div className="learnChooseCategoryMainContainer">

                <div className="learnChooseCategory">
                    <h1>Choose category</h1>
                    <select onChange={setChoosen}>
                        {
                            categories.map((value, index) => {
                                return <option value={value.id}>{value.categoryName}</option>
                            })
                        }
                    </select>
                </div>
                <p>You can continue to your learning session from <b>{lastLearningDate}</b> or choose new session to restart progress</p>
                <div className="lastLearning">
                    <div onClick={selectSession}>new learning session</div>
                    <div onClick={selectSession}>last session</div>
                </div>
               
                <div>
                    <div onClick={changeLocation}><h1>start</h1></div>
                </div>
            </div>
        )
    }else{
        return null;
    }

}