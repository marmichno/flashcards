import axios from 'axios';

export const getFlashcards = async (categoryIndex) =>{

    try{
      const request = await axios.get(`http://localhost:8080/api/flashcards/category/${categoryIndex}`);
      const response = await request.data;
      return response;
    
    }catch(error){
        return error.response;
    }
}