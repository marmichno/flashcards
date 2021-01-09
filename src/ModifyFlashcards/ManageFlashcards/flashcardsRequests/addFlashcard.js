export const addFlashcard = async (firstSentence, secondSentence, categoryId) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"firstSentence":firstSentence,"secondSentence":secondSentence,"flashcardCategoryId":categoryId});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const request = await fetch("http://localhost:8080/api/flashcard", requestOptions);
    const response = await request;
}