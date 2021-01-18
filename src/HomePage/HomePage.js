import '../HomePage/homepage.css'
import {useEffect, useState} from 'react';
import {loginRequest} from '../Login/loginRequest';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../actions';
import {logout} from '../actions';

export const HomePage = () => {

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const loginState = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    //running loginRequest
    const tryToLogin = async () => {
        let response = await loginRequest(userLogin, userPassword);
            if(response.status === 200){
                dispatch(login());
                setLoginError("");
            }else if(response.status === 401){
                setLoginError("Incorrect login or password");
            }
    }

    //saving user login input to state
    const typeUserLogin = (e) => {
        setUserLogin(e.target.value);
    }

    //saving user password input to state
    const typeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    //changing redux state/reseting type states
    const logoutReset = () =>{
        setUserLogin("");
        setUserPassword("");
        dispatch(logout());
    }

    if(!loginState){

        return(
            <div className="homeMainContainer">
                <div className="homeContainer">

                    <div className="homeText">
                        <h1>Flashcards are great way to learn!</h1>
                        <p>
                            A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization.
                        Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates,
                        formulas or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual
                        (part of a flashcard software), or physical.
                        </p>
                    </div>

                    <div className="flashcardHome firstFlashcardHome flip">
                        <div className="front">
                            <h1>Dog</h1>
                        </div>
                        <div className="back">
                            <h1>best dyl ever</h1>
                        </div>
                    </div>

                    <div className="flashcardHome secondFlashcardHome flip">
                        <div className="front">
                            <h1>Dog</h1>
                        </div>
                        <div className="back">
                            <h1>best dyl ever</h1>
                        </div>
                    </div>

                    <div className="loginForm">

                        <div className="loginFormContainer">

                            <div className="firstSentenceContainer formContainer">
                                <input type="text" autocomplete="off" name="category" onChange={typeUserLogin} className="firstSentenceInput" required></input>
                                <label for="category" className="label-name">
                                    <span className="contentName"><p>Login</p></span>
                                </label>
                            </div>

                            <div className="firstSentenceContainer formContainer">
                                <input type="password" autocomplete="off" name="category" onChange={typeUserPassword} className="firstSentenceInput" required></input>
                                <label for="category" className="label-name">
                                    <span className="contentName"><p>Password</p></span>
                                </label>
                            </div>

                            <div className="loginIconContainer">
                                <div onClick={tryToLogin} className="loginIcon"></div>
                            </div>

                            <p>Don't have account already? Click <span className="homeRegister"><a href="/register">here</a></span> to register</p>
                            <p className="error">{`${loginError}`}</p>
                        </div>
                    </div>
                </div>
            </div>
    )}else{
        return(
            <div className="homeMainContainer">
                <div className="homeContainer">

                    <div className="homeText">
                        <h1>Flashcards are great way to learn!</h1>
                        <p>
                            A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization.
                        Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates,
                        formulas or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual
                        (part of a flashcard software), or physical.
                        </p>
                    </div>

                    <div className="flashcardHome firstFlashcardHome"></div>
                    <div className="flashcardHome secondFlashcardHome"></div>

                    <div className="loggedContainer">
                        <h1>Welcome</h1><span><h1>{`${localStorage.getItem('username')}`}</h1></span>
                        <div className="logoutContainer">
                            <div onClick={logoutReset} className="logoutIcon"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}