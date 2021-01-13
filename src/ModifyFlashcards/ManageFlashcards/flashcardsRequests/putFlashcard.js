export const putFlashcard = async (firstSentence, secondSentence, id, categoryId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ` + localStorage.getItem('user'));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"firstSentence":firstSentence,"secondSentence":secondSentence, "flashcardCategoryId":categoryId});

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    await fetch(`http://localhost:8080/api/flashcard/${id}`, requestOptions);
}