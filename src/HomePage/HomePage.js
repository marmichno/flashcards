import '../HomePage/homepage.css'
import {useState} from 'react';
import {loginRequest} from '../Login/loginRequest';

export const HomePage = () => {

    const [userLogin, setUserLogin] = useState(""); // saving input value for adding categories
    const [userPassword, setUserPassword] = useState("");

    //adding new category to database post request, rerendering visible categories
    const tryToLogin = async () => {
        await loginRequest(userLogin, userPassword)
    }

    //saving input text to add new category
    const typeUserLogin = (e) => {
        setUserLogin(e.target.value);
    }

    const typeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

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
                <div className="flashcardHome"></div>
                <div className="flashcardHome"></div>

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

                    <p>Don't have account already? Click <span className="homeRegister">here</span> to register</p>
                </div>

                </div>
            </div>


        </div>
    )
}