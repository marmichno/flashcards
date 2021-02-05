import axios from 'axios';
import {toast} from 'react-toastify';

export const deleteCategoryRequest = async (id) =>{

  try{
    await axios.delete(`http://localhost:8080/api/category/${id}`);
    toast.success('Category deleted');
  }
  catch(error){
    let code = error.response.status;

    if(code === 409){
      toast.error('You cant modify default category');
    }
  }

}