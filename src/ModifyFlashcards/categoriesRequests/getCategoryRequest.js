export const getCategoriesRequest = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ' + base64.encode('swagswag' + ":" + 'swagswag')`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    let request = await fetch("http://localhost:8080/api/categories", requestOptions);
    let response = await request.json();
    return response;
}