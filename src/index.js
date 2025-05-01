import "./modern-normalize.css";
import "./style.css";
import { data, toLocalStorage } from './todos'
import { loadTodos, dataChange } from "./default.js" 
import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"
// import otterImg from "./otter.jpg";
   
// const image = document.createElement("img");
// image.src = otterImg;
   
// document.body.appendChild(image);



export function clearContent() {
    const content = document.querySelector('#list');
    content.innerHTML = '';
}

const listContainer = document.getElementById("list")

export function fillList() {
    // dataChange()
    listContainer.appendChild(loadTodos())
    
}
fillList()

// Modal buttons
dialog
showButton
closeButton
confirmBtn
deleteBtn


//new todo
confirmBtn.addEventListener('click', (e) => {
    clearContent()
    fillList()
    
})
