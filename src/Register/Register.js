import {useState} from 'react';
import {registerUser} from './registerUser';
import '../Register/register.css';

export const Register = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

        //login
        const saveLogin = (e) => {
            setLogin(e.target.value);
        }
    
        //password
        const savePassword = (e) => {
            setPassword(e.target.value);
        }

        //repeat password
        const saveRepeatPassword = (e) => {
            setRepeatPassword(e.target.value);
        }

        const addUser = () => {
            registerUser(login, password);
        }


    return(
        <div className="registerMainContainer">

            <div className="registerForm">


            <div className="registerFormContainer">
                <div className="firstSentenceContainer formContainer">
                    <input type="text" autocomplete="off" name="category" onChange={saveLogin} className="firstSentenceInput" required></input>
                    <label for="category" className="label-name">
                        <span className="contentName"><p>Login</p></span>
                    </label>
                </div>

                <div className="firstSentenceContainer formContainer">
                    <input type="password" autocomplete="off" name="category" onChange={savePassword} className="firstSentenceInput" required></input>
                    <label for="category" className="label-name">
                        <span className="contentName"><p>Password</p></span>
                    </label>
                </div>

                <div className="firstSentenceContainer formContainer">
                    <input type="password" autocomplete="off" name="category" onChange={saveRepeatPassword} className="firstSentenceInput" required></input>
                    <label for="category" className="label-name">
                        <span className="contentName"><p>Repeat password</p></span>
                    </label>
                </div>
            </div>

                <div className="registerIconContainer">
                    <div className="registerIconOverflow">
                        <div className="addIcon" onClick={addUser}></div><p className="addIconText">Register</p>
                    </div>
                </div>

            </div>

        </div>
    )
}