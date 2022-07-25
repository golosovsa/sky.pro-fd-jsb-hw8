document.addEventListener("DOMContentLoaded", () => {
    const excInputs = document.querySelectorAll(".exc");

    excInputs.forEach(excContainer => {
        const excInput = excContainer.querySelector(".exc__input");
        excInput.addEventListener("keyup", handleExcInputKeyUp)
    });
});

const handleExcInputKeyUp = (event) => {
    const excInput = event.target;
    let neighbor = undefined;

    if (event.keyCode === 37 && excInput.previousElementSibling) {
        neighbor = excInput.previousElementSibling
    } else if (event.keyCode === 39 && excInput.nextElementSibling) {
        neighbor = excInput.nextElementSibling
    }

    if (neighbor) {
        const textContent = neighbor.textContent;
        const value = document.createAttribute("value");
        value.value = textContent;

        excInput.setAttributeNode(value);

        neighbor.remove();
    }
}
