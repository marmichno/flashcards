export const deleteCategoryRequest = async (id) =>{
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    await fetch(`http://localhost:8080/api/category/${id}`, requestOptions);
}