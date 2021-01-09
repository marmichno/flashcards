export const addCategoryRequest = async (category) =>{
        let myHeaders = new Headers();
    
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify(category);
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        let request = await fetch("http://localhost:8080/api/category", requestOptions);
        let response = await request;
}