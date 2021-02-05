import axios from 'axios';

export const getCategoryFlashcards = async (category) => {

    try{
        await axios.get(`http://localhost:8080/api/learn/new?category=${category}`);
    }
    catch(error){
        console.log(error);
    }
    
}