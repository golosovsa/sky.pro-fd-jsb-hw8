const vowels = ["a", "e", "i", "o", "u", "а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

const handleExcInputKeyDown = (event) => {
 
    if (vowels.includes(event.key.toLowerCase())) {
        event.preventDefault();
        return;
    } 
}

const handleExcInputChange = (event) => {
    console.log(event);

    const excInput = event.target;

    const value = excInput.value;

    const result = Array.from(excInput.value).filter(value => !vowels.includes(value.toLowerCase()));

    excInput.value = result.join("");
}

document.addEventListener("DOMContentLoaded", () => {

    excInputs = document.querySelectorAll(".exc");

    excInputs.forEach((input) => {
        input.addEventListener("keydown", handleExcInputKeyDown);
        input.addEventListener("change", handleExcInputChange)
    });

});