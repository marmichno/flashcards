import axios from 'axios';
import {toast} from 'react-toastify';

export const registerUser = async (login, password, repeatPassword) => {

    if(password !== repeatPassword){
        toast.error('Password doesnt match');
        return 400;
    }else if(login.length === 0 || password.length === 0 || repeatPassword.length === 0){
        toast.error('All inputs must be filled');
        return 400;
    }
    console.log(login);

    const config = {
        headers: {
                "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify(
        {
            "username":`${login}`,
            "password":`${password}`
        }
    )

    try{
        let request = await axios.post('http://localhost:8080/api/register', body, config);
        let response = await request;
        toast.success('Account registered');
        return response;

    }catch(error){

        let code = error.response.status;

        if(code === 409){
            toast.error("User with this login already exists");
        }else if(code === 400){
            toast.error("Login/password too long/too short");
        }
        return error.response;
    }
}