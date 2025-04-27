import { data, giveID } from './todos'
import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn
deleteBtn


export const id1 = data[0].id


export function loadTodos() {
    const list = document.createElement('div');
    list.classList.add('list');

    // const item = document.createElement('div');
    // item.classList.add('item');

    

    data.forEach((data) => {
        const item = document.createElement('div')
        item.setAttribute('id', data.id)
        item.classList.add('todo')
        
        const title = document.createElement('p')
        title.textContent = data.title

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')

        const delBtn = document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.classList.add(data.id)
        // delBtn.setAttribute('id', data.id)
        delBtn.textContent = 'delete';
        title.appendChild(delBtn)


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.classList.add(data.id)
        // editBtn.setAttribute('id', data.id)
        editBtn.textContent = 'edit';
        title.appendChild(editBtn)
       

        list.appendChild(item)
        item.appendChild(title)
        item.appendChild(buttons)
        buttons.appendChild(delBtn)
        delBtn.addEventListener('click', delFunction)
        buttons.appendChild(editBtn)
        
    })

    return list
}


confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let due = document.getElementById('due').value;

    function newTodo(title, description, due) {
        let newObj = {}
        newObj.title = title;
        newObj.description = description
        newObj.due = due;
        newObj.done = false;
        newObj.id = '';

        data.push(newObj)
    }
    
    newTodo(title, description, due)
    giveID()
    return loadTodos()
    // return console.log('I worked')
})


function delFunction() {
    console.log(this.parentNode.getAttribute("id"))
}


//deleting todos
// window.addEventListener("DOMContentLoaded", e => {
//     document.querySelectorAll(".delete").forEach((element, i) => {
//       element.addEventListener("click", () => console.log(element.parentNode.getAttribute("id")))
//     });
//   })
