export const getCategoryFlashcards = async (category) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));
    

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let request = await fetch(`http://localhost:8080/api/learn/new?category=${category}`, requestOptions);
    console.log('swagResetted')
}