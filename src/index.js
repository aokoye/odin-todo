import "./modern-normalize.css";
import "./style.css";
import { data } from './todos'
import { loadTodos, itmDelete, id1} from "./default.js" 
import { dialog, showButton, closeButton, confirmBtn } from "./buttons.js"
// import otterImg from "./otter.jpg";
   
// const image = document.createElement("img");
// image.src = otterImg;
   
// document.body.appendChild(image);



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

// window.addEventListener("DOMContentLoaded", e => {
//     document.querySelectorAll(".delete").forEach((element, i) => {
//       element.addEventListener("click", () => console.log(`Div ${i} was clicked.`))
//     });
//   })

