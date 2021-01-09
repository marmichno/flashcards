export const deleteCategoryRequest = async (id) =>{
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
    await fetch(`http://localhost:8080/api/category/${id}`, requestOptions);
}