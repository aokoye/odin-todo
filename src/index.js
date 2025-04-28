import "./modern-normalize.css";
import "./style.css";
import { data } from './todos'
import { loadTodos } from "./default.js" 
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
