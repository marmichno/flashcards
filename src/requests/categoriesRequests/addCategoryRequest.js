import axios from 'axios';
import {toast} from 'react-toastify';

export const addCategoryRequest = async (category) =>{

        const config = {
                headers: {
                        "Content-Type": "application/json"
                }
            }

        try{
                const request = await axios.post('http://localhost:8080/api/category', JSON.stringify(category), config);
                const response = await request;
                toast.success('Category added successfully');
                return response;
        
        }catch(error){

                let code = error.response.status;

                if(code === 409){
                        toast.error('This category already exist');
                }else if(code === 400){
                        toast.error('Name too short/too long');
                }
                
        }
}