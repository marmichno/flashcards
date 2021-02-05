import axios from 'axios';

export const getCategoriesRequest = async () => {

    try{
    const request = await axios.get('http://localhost:8080/api/categories');
    let response = await request;
    return response.data
    
    }catch(error){
        console.log(error);
    }
}