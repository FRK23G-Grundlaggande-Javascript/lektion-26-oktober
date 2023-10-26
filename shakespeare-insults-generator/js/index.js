console.log(insults);
const buttonElem = document.querySelector('button');
const insultElem = document.querySelector('#insult');
const playElem = document.querySelector('#play');

let allInsults = [...insults]; // Gör en kopia på insults och spara i en ny variabel

function resetInsults() {
    if (allInsults.length === 0) {
        allInsults = [...insults]; // Återställ arrayen
    }
}

function removeInsult(randomNumber) {
    allInsults.splice(randomNumber, 1);
}

function displayInsult(insultObj) {
    insultElem.innerHTML = insultObj.insult;
    playElem.innerHTML = insultObj.play;
}

buttonElem.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * allInsults.length);
    const insultObj = insults[randomNumber];

    displayInsult(insultObj);
    removeInsult(randomNumber);
    resetInsults();
});
