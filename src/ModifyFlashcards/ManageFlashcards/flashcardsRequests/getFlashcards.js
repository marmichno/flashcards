export const getFlashcards = async(categoryIndex) =>{

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        let request = await fetch(`http://localhost:8080/api/flashcards/${categoryIndex}`, requestOptions);
        let response = await request.json();
        return response;
}