import "./modern-normalize.css";
import "./style.css";
import { data } from './todos'
import { loadTodos, id1} from "./default.js" 
import { dialog, showButton, closeButton, confirmBtn } from "./buttons.js"
// import otterImg from "./otter.jpg";
   
// const image = document.createElement("img");
// image.src = otterImg;
   
// document.body.appendChild(image);

console.log(id1)


function clearContent() {
    const content = document.querySelector('#list');
    content.innerHTML = '';
}

const listContainer = document.getElementById("list")

function fillList() {
    listContainer.appendChild(loadTodos())
}
fillList()

// Modal buttons
dialog
showButton
closeButton
confirmBtn

//new todo
confirmBtn.addEventListener('click', (e) => {
    clearContent()
    fillList()
})
