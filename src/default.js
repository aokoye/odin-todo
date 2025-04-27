import { data, giveID } from './todos'
import { dialog, showButton, closeButton, confirmBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn


export const id1 = data[0].id


export function loadTodos() {
    const list = document.createElement('div');
    list.classList.add('list')

    data.forEach((data) => {
        const title = document.createElement('h2')
        title.setAttribute('id', data.id)
        title.textContent = data.title
        list.appendChild(title)
    })

    // list.appendChild()
    
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
