import { clearContent, fillList } from './index.js'
import { data, giveID } from './todos'
import { dialog, showButton, closeButton, confirmBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn



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
        editBtn.setAttribute('id', data.id)
        editBtn.textContent = 'edit';
        title.appendChild(editBtn)

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.classList.add(data.id)
        doneBtn.setAttribute('id', data.id)
        doneBtn.textContent = 'finished';
        title.appendChild(doneBtn)
       

        list.appendChild(item)
        item.appendChild(title)
        item.appendChild(buttons)
        buttons.appendChild(delBtn)
        delBtn.addEventListener('click', delFunction)
        buttons.appendChild(editBtn)
        editBtn.addEventListener('click', editFunction)
        buttons.appendChild(doneBtn)
        doneBtn.addEventListener('click', doneFunction)
        
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
})

function delFunction() {
    let buttonId = this.parentNode.parentNode.getAttribute("id")
    const targetItemId = buttonId
    // function getItem(item) {
    //     return item.id === targetItemId
    // }

    function isItem(item) {
        return item.id === targetItemId
    }

    let targetItem = data.find(isItem)

    //finds the index
    function itemIndex(id) {
        return id === targetItem
    }
    
    let idx = data.findIndex(itemIndex)
    console.log(idx)

    const remove = data.splice(idx, 1)
    remove
    clearContent()
    fillList()
}

function doneFunction() {
    if (this.parentNode.parentNode.classList.contains('finished')) {
        this.parentNode.parentNode.classList.remove('finished');
    } else {
        this.parentNode.parentNode.classList.add('finished')
    }
    
}

const editConfirmBtn = editDialog.querySelector("#editConfirmBtn");
function editFunction(buttonId) {
    console.log('hello')
    editDialog.showModal()
    
    let id = this.parentNode.parentNode.getAttribute("id")
    itemId === id;
    document.getElementById('itemId').value = id
}

editConfirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    editDialog.close()

    const title = document.getElementById('editTitle').value
    const description = document.getElementById('editDescription').value
    const due = document.getElementById('editDue').value
    
    let buttonId = document.getElementById('itemId').value
    const targetItemId = buttonId

    function isItem(item) {
        return item.id === targetItemId
    }

    let targetItem = data.find(isItem)

    //finds the index
    function itemIndex(id) {
        return id === targetItem
    }
    
    let idx = data.findIndex(itemIndex)
    console.log(idx)
    
    if(title != '') {
        data[idx].title = title
    }
    
    if(description != '') {
        data[idx].description = description
    }

    if(due != '') {
        data[idx].due = due
    }

    console.log(data[idx].due)
    console.log('good bye')

    clearContent()
    fillList()
    
  });