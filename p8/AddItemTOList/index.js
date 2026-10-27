const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const unorderedList = document.getElementById("itemList");

button.addEventListener('click',()=>{
    const value = input.value;
    if(value === "") return;
    const list = document.createElement('li')
    list.textContent = value;
    unorderedList.appendChild(list);

    input.value = "";
})