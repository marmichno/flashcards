export const deleteSentence = async (id) => {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
    let request = await fetch(`http://localhost:8080/api/flashcard/${id}`, requestOptions);
    let response = await request;
    return response;
}