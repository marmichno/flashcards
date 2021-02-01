import {useState, useEffect} from 'react';
import {getCategoriesRequest} from '../requests/categoriesRequests/getCategoryRequest';
import {getLastLearning} from '../requests/learningRequests/getLastLearning';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './chooseCategory.css';

export const ChooseCategory = () => {

    const [categories, setCategories] = useState("");
    const [mode, setMode] = useState("");
    const [lastLearning, setLastLearning] = useState(false);
    const [restartProgress, setRestartProgress] = useState(true);
    const [choosenCategory, setChoosenCategory] = useState();
    let history = useHistory(); 

    useEffect(() => {
        getCategoriesRequest().then(result => {
            setCategories(result);
        })
    },[]);

    useEffect(() => {
        if(categories.length > 0){
            setChoosenCategory(categories[0].id);
        }
    }, [categories]);

    useEffect(() =>{
        getLastLearning().then(result =>{
            if(result === 404){
                setLastLearning(false);
            }else{
                setLastLearning(true);
            }
        })
    }, []);

    const setChoosen = (e) => {
        setChoosenCategory(e.target.options[e.target.selectedIndex].value);
    }

    const selectMode = (e) =>{

        let modes = document.querySelectorAll('.learnChooseMode div');
        modes.forEach(element => element.classList.remove('learnActive'))
        e.target.classList.add('learnActive');
        setMode(e.target.innerHTML);

    }

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

    const changeLocation = () => {
        let session = document.querySelectorAll('.lastLearning div');
        let modes = document.querySelectorAll('.learnChooseMode div');
        let counter = 0;
        session.forEach(result => result.classList.value === "learnActive" ? counter++ : null);
        modes.forEach(result => result.classList.value === "learnActive" ? counter++ : null);
 
        if(counter === 1 || counter === 2){
            const location = {
                pathname: '/learn-choose-category/learning',
                state: {
                    categoryIndex:choosenCategory,
                    restartProgress:restartProgress,
                    mode:mode
                }
            }    
            history.push(location);
        }else{
            console.log("michal suck ballz");
        }
    }

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

                <h1>Select learning Mode</h1>
                <div className="learnChooseMode">
                    <div onClick={selectMode}>flashcard</div>
                    <div onClick={selectMode}>typing</div>
                    <div onClick={selectMode}>one of three</div>
                </div>
                <div>

                    <div onClick={changeLocation}>start</div>

                </div>
            </div>
        )
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
                <p>if you select new session your progress will be lost</p>
                <div className="lastLearning">
                    <div onClick={selectSession}>new learning session</div>
                    <div onClick={selectSession}>last session</div>
                </div>
                <h1>Select learning Mode</h1>
                <div className="learnChooseMode">
                    <div onClick={selectMode}>flashcard</div>
                    <div onClick={selectMode}>typing</div>
                    <div onClick={selectMode}>one of three</div>
                </div>
                <div>
                    <div onClick={changeLocation}>start</div>

                </div>
            </div>
        )
    }else{
        return null;
    }

}