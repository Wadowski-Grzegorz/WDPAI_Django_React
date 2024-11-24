// requests.js

// Function to send GET request
function sendGetRequest() {
    const input = document.getElementById("getInputField").value;
    const url = `http://localhost:8000/${input}`; // Assumes the server is running on localhost:8000

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // pobierz referencję do elementu html o id getResponse,
            // textContent potraktuj wszystko jako zwykłe znaki
            // document.getElementById("getResponse").textContent = "Hello" ustawi w elemencie getResponse tekst "Hello"

            // JSON.stringify() - zmienia obiekt JS (lub wartość) na format JSON
            // data - obiekt, który chcę przekonwertować - odpowiedź serwera
            // null - zamiast tego można wprowadzić funkcję modyfikującą sposób przekształcania obiektu na JSON
            // 2 - sformatowanie wyniku, wcięcie nowej linii o 2 spacje

            document.getElementById("getResponse").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}

// Function to send POST request
function sendPostRequest() {
    const name = document.getElementById("postNameField").value;
    const data = {
        name: name
    };

    fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("postResponse").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}
