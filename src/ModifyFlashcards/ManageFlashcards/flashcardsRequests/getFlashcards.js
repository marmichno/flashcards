export const getFlashcards = async(categoryIndex) =>{

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        let request = await fetch(`http://localhost:8080/api/flashcards/${categoryIndex}`, requestOptions);
        let response = await request.json();
        return response;
}