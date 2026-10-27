const button = document.querySelectorAll('button')

const savedColor = localStorage.getItem('selectedBgColor');
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

button.forEach(function(button){
    button.addEventListener('click',function(event){

        const color = event.target.id;
        document.body.style.backgroundColor = color;

        localStorage.setItem('selectedBgColor',color);
    })
})