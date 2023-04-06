function createWord(text, index) {
    const word = document.createElement("span");
    word.innerHTML = `${text}`;
    word.classList.add("card-subtitle-letter");
    word.style.transitionDelay = `${index * 20}ms`;
    return word;
}
function addWord (text, index) {
    const infoCardSubtitle = document.getElementsByClassName("card-subtitle")[0];
    infoCardSubtitle.appendChild(createWord(text,index));
}

function createSubtitle(text) {
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        addWord(letter, i);
    }
}
