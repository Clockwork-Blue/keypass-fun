const infoCardSubtitle = document.getElementById("card-subtitle")[0];

function createWord(text, index) {
    const word = document.createElement("span");
    word.innerHTML = `${text}`;
    word.classList.add("card-subtitle-words");
    word.style.transitionDelay = `${index * 40}ms`;
    return word;
}
function addWord(text, index) {
    infoCardSubtitle.appendChild(createWord(text,index));
}

function createSubtitle(text) {
    text.split(" ").map(addWord);
}

createSubtitle("An aspiring programmer and web developer.")