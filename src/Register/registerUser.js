export const registerUser = async (login, password) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=D3623BB0054E24F61853BC083AADCAAB");

    const raw = JSON.stringify({"username":`${login}`,"password":`${password}`});

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch("http://localhost:8080/api/register", requestOptions);
    console.log(response);
    return response;
}