import "./modern-normalize.css";
import "./style.css";
import { data, toLocalStorage } from './todos'
import { loadTodos, loadProjects } from "./default.js" 
import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"
// import otterImg from "./otter.jpg";
   
// const image = document.createElement("img");
// image.src = otterImg;
   
// document.body.appendChild(image);



export function clearContent() {
    const content = document.querySelector('#list');
    content.innerHTML = '';
}

export function clearProjectContent() {
    const content = document.querySelector('#projectList');
    content.innerHTML = '';
}


const listContainer = document.getElementById("list")

export function fillList() {
    listContainer.appendChild(loadTodos())
}

fillList()

const projectContainer = document.getElementById("projectList")
export function fillProject() {
    projectContainer.appendChild(loadProjects())
}
fillProject()

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
