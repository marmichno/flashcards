import axios from 'axios'
import {toast} from 'react-toastify';

export const putFlashcard = async (firstSentence, secondSentence, id, categoryId) => {

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
    await axios.put(`http://localhost:8080/api/flashcard/${id}`, body, config);
    toast.success('Flashcard Modified');

    }catch(error){

        let code = error.response.status;

        if(error.response.status === 400){
            toast.error('Inputs cannot be empty');
        }
    }
}