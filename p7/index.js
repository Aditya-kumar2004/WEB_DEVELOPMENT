// Select the main display
const mainDisplay = document.getElementById("mainDisplay");

// Select all thumbnails
const thumbnails = document.querySelectorAll(".thumbnail");

// Add click event to every thumbnail
thumbnails.forEach(function (thumbnail) {

    // Set the thumbnail's background color
    thumbnail.style.backgroundColor = thumbnail.dataset.color;

    thumbnail.addEventListener("click", function () {

        // Change the main display color
        mainDisplay.style.backgroundColor = thumbnail.dataset.color;

    });

});
