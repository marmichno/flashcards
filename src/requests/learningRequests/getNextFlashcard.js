import axios from 'axios';

export const getNextFlashcard = async () => {

  try{
    let request = await axios.get("http://localhost:8080/api/learn/flashcard/next");
    let response = await request.data;
    return response;
  }
  catch(error){
      console.log(error);
  }
}