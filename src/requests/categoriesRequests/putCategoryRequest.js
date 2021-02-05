import axios from 'axios';
import {toast} from 'react-toastify';

export const putCategoryRequest = async (id, categoryName) => {

    const config = {
        headers: {
                "Content-Type": "application/json"
        }
    }

    try{
    await axios.put(`http://localhost:8080/api/category/${id}`, JSON.stringify(categoryName) , config);
    toast.success('Category was modified');

    }catch(error){
        console.log(error);
        let code = error.response.status;

        if(code === 409){
            toast.error('You cant modify default category');
        }else if(code === 400){
            toast.error('Name too short/too long');
        }
    }
}