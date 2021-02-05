import axios from 'axios';
import {toast} from 'react-toastify';

export const deleteSentence = async (id) => {

  try{
    await axios.delete(`http://localhost:8080/api/flashcard/${id}`);
    toast.success('Flashcard deleted');
  }
  catch(error){
    console.log(error);
  }
}