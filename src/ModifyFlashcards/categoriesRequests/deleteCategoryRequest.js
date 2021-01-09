export const deleteCategoryRequest = async (id) =>{
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));

    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
    await fetch(`http://localhost:8080/api/category/${id}`, requestOptions);
}