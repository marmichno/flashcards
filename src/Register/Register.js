import {useState} from 'react';
import {registerUser} from './registerUser';
import '../Register/register.css';

export const Register = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorStatus, setErrorStatus] = useState("");
    const [successRegister, setSuccesRegister] = useState("");

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

        const addUser = async () => {

            if(password !== repeatPassword){
                setErrorStatus("Passwords does not match");
            }else{

                let response = await registerUser(login, password);
                
                if(response.status === 409){
                    setErrorStatus("User with this login already exists");
                }else if(response.status === 400){
                    setErrorStatus("Login and password has to be at least 5 symbols long and cant be longer than 20 symbols");
                }else if(response.status === 200){
                    setSuccesRegister("Account has been created, you may login now");
                    setTimeout(() =>{
                        window.location = "/"
                    }, 1000);
                }

            }
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
                <p className="error">{`${errorStatus}`}</p>
                <p className="success">{`${successRegister}`}</p>
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