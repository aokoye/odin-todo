import { clearContent, clearProjectContent, fillList, fillProject } from './index.js'
import { data, giveID, project, toLocalStorage } from './todos'
import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn

// const dataFromStorage = localStorage.getItem('itemData')
// const data = JSON.parse(dataFromStorage)

const storageData = localStorage.getItem("itemData")
const dataString = JSON.stringify(data)
    
export function dataChange() {
    if (storageData === dataString) {
        console.log('same')
    } else {
        console.log('not same')
        console.log(storageData)
        console.log(dataString)

        data === storageData
        console.log(data)
    }

    console.log('I might be working')
}




export function loadTodos() {
    // dataChange()

    const list = document.createElement('div');
    list.classList.add('list');

    // const item = document.createElement('div');
    // item.classList.add('item');

    

    data.forEach((data) => {
        const item = document.createElement('div')
        item.setAttribute('id', data.id)
        item.classList.add('todo')
        item.classList.add('unfinished')
        
        if (data.done === true) {
            item.classList.remove('unfinished')
            item.classList.add('finished')
        }

        const title = document.createElement('p')
        title.textContent = data.title
        
        const hidden = document.createElement('div')
        hidden.classList.add('hidden')
        hidden.classList.add('hide')

        const details = document.createElement('p')
        details.classList.add('details')
        details.textContent = data.details

        const due = document.createElement('p')
        due.classList.add('due')
        due.textContent = data.due

        const importance = document.createElement('p')
        importance.classList.add('importance')
        importance.textContent = data.importance

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
       
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('more');
        moreBtn.classList.add(data.id)
        moreBtn.setAttribute('id', data.id)
        moreBtn.textContent = 'more';
        title.appendChild(moreBtn)

        list.appendChild(item)
        item.appendChild(title)
        item.appendChild(hidden)
        hidden.appendChild(details)
        hidden.appendChild(due)
        hidden.appendChild(importance)
        item.appendChild(buttons)
        buttons.appendChild(moreBtn)
        moreBtn.addEventListener('click', hideFunction)
        buttons.appendChild(editBtn)
        editBtn.addEventListener('click', editFunction)
        buttons.appendChild(doneBtn)
        doneBtn.addEventListener('click', doneFunction)
        buttons.appendChild(delBtn)
        delBtn.addEventListener('click', delFunction)
        
    })
    // toLocalStorage()
    return list
}


confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let due = document.getElementById('due').value;
    let importance = document.querySelector('input[name="importance"]:checked').value

    function newTodo(title, description, due, importance) {
        let newObj = {}
        newObj.title = title;
        newObj.details = description
        newObj.importance = importance
        newObj.due = due;
        newObj.done = false;
        newObj.id = '';

        data.push(newObj)
        localStorage.setItem('itemData', JSON.stringify(data));
    }
    
    newTodo(title, description, due, importance)
    giveID()
    // toLocalStorage()
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
    localStorage.setItem('itemData', JSON.stringify(data));
    clearContent()
    fillList()
}

function doneFunction() {
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

function hideFunction() {
    if (this.parentNode.previousElementSibling.classList.contains('hide')) {
        this.parentNode.previousElementSibling.classList.remove('hide');
    } else {
        this.parentNode.previousElementSibling.classList.add('hide')
    }  
}

const editConfirmBtn = editDialog.querySelector("#editConfirmBtn");
function editFunction(buttonId) {
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

    localStorage.setItem('itemData', JSON.stringify(data));
    clearContent()
    fillList()
    
});


//Project code'

const newProjectBtn = document.querySelector('#newProjectBtn');
// const newProject = document.querySelector('#newProject')
const projectConfirmBtn = newProject.querySelector('#projectConfirmBtn')

newProjectBtn.addEventListener('click',(event) => {
    newProject.showModal()
    event.preventDefault()
    console.log('click')
})

projectConfirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newProject.close()

    const title = document.getElementById('projectTitle').value
    let newProj = {}
    newProj.title = title

    project.push(newProj)

    localStorage.setItem('projectData', JSON.stringify(project));
    clearProjectContent()
    fillProject()

})

export function loadProjects(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');

    project.forEach((project) => {
        let noSpaces = project.title.replaceAll(' ', '');

        const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', noSpaces)

        const projectBtn =  document.createElement('button')
        projectBtn.classList.add(noSpaces)
        projectBtn.textContent = project.title

        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.classList.add(noSpaces)
        deleteProjectBtn.textContent = 'Delete';

        projectContainer.appendChild(buttonContainer)
        buttonContainer.appendChild(projectBtn)
        buttonContainer.appendChild(deleteProjectBtn)
        deleteProjectBtn.addEventListener('click', delProject)

    
    })
    return projectContainer
}

function delProject() {
    let buttonClass = this.className
    console.log(buttonClass)
    // const targetItemClass = buttonId
    // function getItem(item) {
    //     return item.id === targetItemId
    // }

    function isItem(item) {
        return item.title === buttonClass
    }

    
    let targetItem = project.find(isItem)
 
    //finds the index
    function itemIndex(id) {
        return id === targetItem
    }
    
    let idx = project.findIndex(itemIndex)
    console.log(idx)

    const remove = project.splice(idx, 1)
    
    remove
    localStorage.setItem('projectData', JSON.stringify(project));
    clearProjectContent()
    fillProject()
}



