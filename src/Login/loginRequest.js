export const loginRequest = async (login, password, loginError) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + btoa(login + ":" + password));


    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    let response = await fetch("http://localhost:8080/api/userinfo", requestOptions);

    console.log(response);

    if(response.status === 200){
        let headers = btoa(login + ":" + password);
        localStorage.setItem('user', headers);
        localStorage.setItem('username', login);
    }

    return response;
}