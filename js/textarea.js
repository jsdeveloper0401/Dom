
const area = document.getElementById("area");
const wordCount = document.getElementById("wordCount");
const letterCount = document.getElementById("letterCount");

area.addEventListener("input", function () {
    const text = this.value.trim();
    const words = countWords(text);
    const letters = countLetters(text);
    wordCount.textContent = words + " words";
    letterCount.textContent = letters + " letters";
});

function countWords(text) {
    if (!text) return 0;
    const wordArray = text.trim().split(/\s+/);
    return wordArray.length;
}

function countLetters(text) {
    return text.replace(/\s+/g, "").length;
}
