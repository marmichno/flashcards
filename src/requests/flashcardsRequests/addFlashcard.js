import axios from 'axios';
import {toast} from 'react-toastify';

export const addFlashcard = async (firstSentence, secondSentence, categoryId) =>{

    if(firstSentence.length > 11){
        toast.error('First sentence too long');
        return 400;
    }else if(secondSentence.length > 200){
        toast.error('Second sentence too long');
        return 400;
    }


    const config = {
        headers: {
                "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify(
        {
        "firstSentence":firstSentence,
        "secondSentence":secondSentence,
        "flashcardCategoryId":categoryId
        }
    )

    try{
        let request = await axios.post('http://localhost:8080/api/flashcard', body, config);
        let response = await request;
        toast.success('Flashcard added');
        return response;

    }catch(error){

        let code = error.response.status;

        if(error.response.status === 400){
            toast.error('Inputs cannot be empty');
        }

        return error.response;
    }
}