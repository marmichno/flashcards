import axios from 'axios';
import {toast} from 'react-toastify';

export const loginRequest = async (login, password) => {

    const config = {
        headers: {
            'Authorization': 'Basic ' + btoa(login + ":" + password)
        }
    }

    try{
        const request = await axios.get('http://localhost:8080/api/userinfo', config);
        const response = await request;
        let headers = btoa(login + ":" + password);
        localStorage.setItem('user', headers);
        localStorage.setItem('username', login);
        axios.defaults.headers.common['Authorization'] = `Basic ` + localStorage.getItem('user');
        return response;
    } 
    catch(error){
        toast.error('Wrong username or password');
        return error.response;
    }
}