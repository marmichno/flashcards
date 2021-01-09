export const putCategoryRequest = async (id, categoryName) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(`${categoryName}`);

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

   await fetch(`http://localhost:8080/api/category/${id}`, requestOptions);
}