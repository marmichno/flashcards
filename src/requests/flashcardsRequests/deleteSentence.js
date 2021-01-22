export const deleteSentence = async (id) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    let request = await fetch(`http://localhost:8080/api/flashcard/${id}`, requestOptions);
    let response = await request;
    return response;
}