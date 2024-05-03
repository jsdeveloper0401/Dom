const area = document.getElementById("area");
const input = document.getElementById("input");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const file = document.getElementById("file");
const textinput = document.getElementById("text");

input.addEventListener("input", function () {
    const inputWord = this.value.trim();
    const text = area.value.trim();
    const containsWord = text.includes(inputWord);
    result.textContent = containsWord
        ? "Bu so'z textareada mavjud."
        : "Bu so'z textareada mavjud emas.";
});

file.addEventListener("change", function () {
    const selectedFile = this.files[0];
    const fileSizeInBytes = selectedFile.size;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    console.log("Tanlangan faylning hajmi: " + fileSizeInKB.toFixed(2) + " KB");
    console.log("Tanlangan faylning hajmi: " + fileSizeInMB.toFixed(2) + " MB");

    if (fileSizeInMB > 1) {
        alert("Iltimos, fayl hajmi 1 MB dan kichik bo'lsin.");
        this.value = "";
    }
});

textinput.addEventListener("change", (e) => {
    const text = e.target.value;
    let left = 0;
    let right = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") {
            left++;
        } else if (text[i] === ")") {
            right++;
        }
    }

    const equal = left === right ? "teng" : "teng emas";
    result2.textContent = `
     Left (: ${left} ta 
      Right ): ${right} ta 
     Skobkalar soni: ${equal}`;
});
