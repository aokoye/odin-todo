import "./modern-normalize.css";
import "./style.css";
import { newTodo, loadTodos, id1, id2 } from "./default.js"
// import otterImg from "./otter.jpg";
   
// const image = document.createElement("img");
// image.src = otterImg;
   
// document.body.appendChild(image);
console.log(newTodo)
console.log(id1)
console.log(id2)

const listContainer = document.getElementById("list")

function fillList() {
    listContainer.appendChild(loadTodos())
}
fillList()