const headings = document.querySelectorAll('.section-data');

headings.forEach(function(heading){

    heading.addEventListener('click',function(){

        const content = heading.nextElementSibling;

        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});