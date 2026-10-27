const paragraph = document.getElementById("p");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
    // Add the "change" class to the paragraph
    paragraph.classList.add("change");
});