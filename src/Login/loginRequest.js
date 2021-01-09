export const loginRequest = (login, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ' + base64.encode(${login} + ":" + ${password})`);


    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("http://localhost:8080/api/userinfo", requestOptions);
}