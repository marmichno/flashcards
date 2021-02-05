import axios from 'axios';

export const getLastLearning = async () => {
    try{
        let request = await axios.get("http://localhost:8080/api/learn/last");
        let response = await request;
        return response;
    }
    catch(error){
        console.log(error);
        return error.response;
    }
}