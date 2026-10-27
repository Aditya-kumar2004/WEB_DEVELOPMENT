const password1 = document.getElementById('passwordID');
const toggle = document.getElementById('toggleBtnID');

toggle.addEventListener('click',()=>{
    if(password1.type === 'password'){
        password1.type = 'text';
        toggle.textContent = "Hide Password"
    }else{
        password1.type = 'password';
        toggle.textContent = "Show Password"

    }
})