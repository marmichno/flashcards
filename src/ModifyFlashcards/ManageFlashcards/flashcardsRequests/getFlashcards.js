export const getFlashcards = async(categoryIndex) =>{

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));
    myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        let request = await fetch(`http://localhost:8080/api/flashcards/category/${categoryIndex}`, requestOptions);
        let response = await request.json();
        return response;
}