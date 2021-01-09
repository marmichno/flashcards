export const putFlashcard = async (firstSentence, secondSentence, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"firstSentence":firstSentence,"secondSentence":secondSentence});

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    await fetch(`http://localhost:8080/api/flashcard/${id}`, requestOptions);
}