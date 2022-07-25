document.addEventListener("DOMContentLoaded", () => {
    const excInputs = document.querySelectorAll(".exc");

    excInputs.forEach(excContainer => {
        const excInput = excContainer.querySelector(".exc__input");
        excInput.addEventListener("keyup", handleExcInputKeyUp)
    });
});

const handleExcInputKeyUp = (event) => {
    console.log(event);

    const excInput = event.target;

    if (event.keyCode === 37 && excInput.previousElementSibling) {
        excInput.previousElementSibling.remove();
    } else if (event.keyCode === 39 && excInput.nextElementSibling) {
        excInput.nextElementSibling.remove();
    }
}
