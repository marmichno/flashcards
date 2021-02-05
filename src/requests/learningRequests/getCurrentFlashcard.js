import axios from 'axios';

export const getCurrentFlashcard = async () =>{
    try{
        let request = await axios.get("http://localhost:8080/api/learn/flashcard/current");
        let response = await request.data;
        return response;
    }
    catch(error){
        console.log(error);
    }
}
