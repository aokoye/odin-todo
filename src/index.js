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

function doneStyle() {
    const finished = document.querySelectorAll('.finished')
    const unfinished = document.querySelectorAll('.unfinished')
    
    if (this.parentNode.parentNode.classList.contains('finished')) {
        this.parentNode.parentNode.classList.remove('finished');
        this.parentNode.parentNode.classList.add('unfinished');
        data[idx].done = false
        localStorage.setItem('itemData', JSON.stringify(data));
    } else {
        this.parentNode.parentNode.classList.remove('unfinished');
        this.parentNode.parentNode.classList.add('finished')
        data[idx].done = true
        localStorage.setItem('itemData', JSON.stringify(data));
    }
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
