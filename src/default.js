import { clearContent, clearProjectContent, fillList, fillProject } from './index.js'
import { data, giveID, project } from './todos'
import { dialog, showButton, closeButton, confirmBtn } from "./buttons.js"

//images
import moreImg from './more.svg'
import editImg from './edit.svg'
import doneImg from './check.svg'
import deleteImg from './trash.svg'



dialog
showButton
closeButton
confirmBtn

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
        const dueDate = new Date(data.due)
        //Icons
        const moreIcon = document.createElement("img");
        moreIcon.src = moreImg;
        const editIcon = document.createElement("img");
        editIcon.src = editImg;
        const doneIcon = document.createElement("img");
        doneIcon.src = doneImg;
        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteImg;

        const item = document.createElement('div')
        item.setAttribute('id', data.id)
        item.classList.add('todo')
        item.classList.add(data.project)
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
        details.textContent = 'Details: ' + data.details

        const due = document.createElement('p')
        due.classList.add('due')
        due.textContent = 'Due on: ' + dueDate.toDateString()

        const importance = document.createElement('p')
        importance.classList.add('importance')
        importance.textContent = 'Importance: ' + data.importance

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')

        const delBtn = document.createElement('button');
        delBtn.classList.add('delete');
        delBtn.classList.add(data.id)
        delBtn.appendChild(deleteIcon)
        title.appendChild(delBtn)


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.classList.add(data.id)
        editBtn.setAttribute('id', data.id)
        editBtn.appendChild(editIcon)
        title.appendChild(editBtn)

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.classList.add(data.id)
        doneBtn.setAttribute('id', data.id)
        doneBtn.appendChild(doneIcon)
        title.appendChild(doneBtn)
       
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('more');
        moreBtn.classList.add(data.id);
        moreBtn.setAttribute('id', data.id)
        moreBtn.appendChild(moreIcon)
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
    return list
}


confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let due = document.getElementById('due').value;
    let importance = document.getElementById('importance').value
    let projOption = document.getElementById('projectOptions').value;

    function newTodo(title, description, due, importance, projOption) {
        let newObj = {}
        newObj.title = title;
        newObj.details = description
        newObj.project = projOption
        newObj.importance = importance
        newObj.due = due;
        newObj.done = false;
        newObj.id = '';

        data.push(newObj)
        localStorage.setItem('itemData', JSON.stringify(data));
    }
    
    newTodo(title, description, due, importance, projOption)
    giveID()
    document.getElementById('addTodo').reset()
    return loadTodos()
})


function delFunction() {
    let buttonId = this.parentNode.parentNode.getAttribute("id")
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

    const remove = data.splice(idx, 1)
    
    remove
    localStorage.setItem('itemData', JSON.stringify(data));
    clearContent()
    fillList()
}

function doneFunction() {
    let buttonId = this.parentNode.parentNode.getAttribute("id")
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

     // Dropdown options
     let select = document.getElementById('editOptions');
     let options = project;
     let projOption = document.createElement('option')
     
     document.querySelectorAll("option").forEach(e => e.remove());
     select.appendChild(projOption)
     projOption.textContent = 'Default'
 
     for(let i = 0; i < options.length; i++) {
         let opt = options[i].title;
         let el = document.createElement('option')
         el.textContent = opt;
         el.value = options[i].title.replaceAll(' ', '');
         select.appendChild(el);
     }

     //Importance
    let impSelect = document.getElementById('editImportance')
    let optElementDefault = document.createElement('option')
    let optElementLow = document.createElement('option')
    let optElementMed = document.createElement('option')
    let optElementHigh = document.createElement('option')

    impSelect.appendChild(optElementDefault);
    optElementDefault.textContent = 'Choose importance level';
    optElementDefault.setAttribute('value', '');
    impSelect.appendChild(optElementLow);
    optElementLow.textContent = 'Low';
    optElementLow.setAttribute('value', 'low');
    impSelect.appendChild(optElementMed);
    optElementMed.textContent = 'Medium';
    optElementMed.setAttribute('value', 'medium');
    impSelect.appendChild(optElementHigh);
    optElementHigh.textContent = 'High';
    optElementHigh.setAttribute('value', 'high');
}

editConfirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    editDialog.close()

    const title = document.getElementById('editTitle').value
    const description = document.getElementById('editDescription').value
    const due = document.getElementById('editDue').value
    const editOptions = document.getElementById('editOptions').value
    const importance = document.getElementById('editImportance').value

    let buttonId = document.getElementById('itemId')?.value
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

    if(editOptions != '') {
        data[idx].project = editOptions
    }

    if(importance != '' ) {
        data[idx].importance = importance
    }

    localStorage.setItem('itemData', JSON.stringify(data));
    document.getElementById('editTodo').reset()
    clearContent()
    fillList()
    
});


//Project code'

const newProjectBtn = document.querySelector('#newProjectBtn');
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
    document.getElementById('projectForm').reset()
    clearProjectContent()
    fillProject()

})

const projCancelBtn = document.getElementById('projectCancel')
projCancelBtn.addEventListener('click', (event) => {
    document.getElementById('projectForm').reset()
})

export function loadProjects(){
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');

    project.forEach((project) => {
        const deleteIcon = document.createElement("img");
        deleteIcon.src = deleteImg;

        let noSpaces = project.title.replaceAll(' ', '');

        const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', noSpaces)

        const projectBtn =  document.createElement('button')
        projectBtn.classList.add(noSpaces)
        projectBtn.textContent = project.title

        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.classList.add(noSpaces)
        deleteProjectBtn.appendChild(deleteIcon)

        projectContainer.appendChild(buttonContainer)
        buttonContainer.appendChild(projectBtn)
        projectBtn.addEventListener('click', filterProjects)
        buttonContainer.appendChild(deleteProjectBtn)
        deleteProjectBtn.addEventListener('click', delProject)

    
    })
    return projectContainer
}


function delProject() {
    let buttonClass = this.className
    console.log(buttonClass)

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
    clearContent()
    fillList()
}

const defaultProjectBtn = document.getElementById('default')
defaultProjectBtn.addEventListener('click', (event) => {
    clearContent()
    fillList()
})

function filterProjects() {
    document.querySelectorAll(".todo").forEach(e => e.remove());
    const buttonClass = this.className
    console.log(buttonClass)

    function returnProjects() {
        data.forEach((data) => {
            const dueDate = new Date(data.due)

            //Icons
            const moreIcon = document.createElement("img");
            moreIcon.src = moreImg;
            const editIcon = document.createElement("img");
            editIcon.src = editImg;
            const doneIcon = document.createElement("img");
            doneIcon.src = doneImg;
            const deleteIcon = document.createElement("img");
            deleteIcon.src = deleteImg;

            if (data.project === buttonClass){
                const item = document.createElement('div')
                item.setAttribute('id', data.id)
                item.classList.add('todo')
                item.classList.add(data.project)
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
                details.textContent = 'Details: ' + data.details
        
                const due = document.createElement('p')
                due.classList.add('due')
                due.textContent = 'Due on: ' + dueDate.toDateString()
        
                const importance = document.createElement('p')
                importance.classList.add('importance')
                importance.textContent = 'Importance: ' + data.importance
        
                const buttons = document.createElement('div')
                buttons.classList.add('buttons')
        
                const delBtn = document.createElement('button');
                delBtn.classList.add('delete');
                delBtn.classList.add(data.id);
                delBtn.appendChild(deleteIcon);
                title.appendChild(delBtn);
        
        
                const editBtn = document.createElement('button');
                editBtn.classList.add('edit');
                editBtn.classList.add(data.id);
                editBtn.setAttribute('id', data.id);
                editBtn.appendChild(editIcon);
                // editBtn.textContent = 'edit';
                title.appendChild(editBtn);
        
                const doneBtn = document.createElement('button');
                doneBtn.classList.add('done');
                doneBtn.classList.add(data.id);
                doneBtn.setAttribute('id', data.id);
                doneBtn.appendChild(doneIcon);
                title.appendChild(doneBtn);
               
                const moreBtn = document.createElement('button');
                moreBtn.classList.add('more');
                moreBtn.classList.add(data.id);
                moreBtn.setAttribute('id', data.id);
                moreBtn.appendChild(moreIcon);
                title.appendChild(moreBtn);
        
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
            }
           
            
        })
        return list
    }
    returnProjects()
}

// Today
function filterToday() {
    document.querySelectorAll(".todo").forEach(e => e.remove());

    function returnProjects() {
        data.forEach((data) => {
            //Icons
            const moreIcon = document.createElement("img");
            moreIcon.src = moreImg;
            const editIcon = document.createElement("img");
            editIcon.src = editImg;
            const doneIcon = document.createElement("img");
            doneIcon.src = doneImg;
            const deleteIcon = document.createElement("img");
            deleteIcon.src = deleteImg;
            
            // const dueDate = data.due
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

            let startDate = new Date(data.due);
            let endDate = new Date(today);

            let difference = startDate.getTime() - endDate.getTime();

            console.log(difference);

            let TotalDiffDays = Math.ceil(difference / (1000 * 3600 * 24));
            console.log(TotalDiffDays + " days :) ");

            if (TotalDiffDays === 0){
                const dueDate = new Date(data.due)
                const item = document.createElement('div')
                item.setAttribute('id', data.id)
                item.classList.add('todo')
                item.classList.add(data.project)
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
                details.textContent = 'Details: ' + data.details
        
                const due = document.createElement('p')
                due.classList.add('due')
                due.textContent = 'Due on: ' + dueDate.toDateString()
        
                const importance = document.createElement('p')
                importance.classList.add('importance')
                importance.textContent = 'Importance: ' + data.importance
        
                const buttons = document.createElement('div')
                buttons.classList.add('buttons')
        
                const delBtn = document.createElement('button');
                delBtn.classList.add('delete');
                delBtn.classList.add(data.id);
                delBtn.appendChild(deleteIcon);
                title.appendChild(delBtn);
        
        
                const editBtn = document.createElement('button');
                editBtn.classList.add('edit');
                editBtn.classList.add(data.id);
                editBtn.setAttribute('id', data.id);
                editBtn.appendChild(editIcon);
                title.appendChild(editBtn);
        
                const doneBtn = document.createElement('button');
                doneBtn.classList.add('done');
                doneBtn.classList.add(data.id);
                doneBtn.setAttribute('id', data.id);
                doneBtn.appendChild(doneIcon);
                title.appendChild(doneBtn);
               
                const moreBtn = document.createElement('button');
                moreBtn.classList.add('more');
                moreBtn.classList.add(data.id);
                moreBtn.setAttribute('id', data.id);
                moreBtn.appendChild(moreIcon);
                title.appendChild(moreBtn);
        
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
            }
           
            
        })
        return list
    }
    returnProjects()
}

const todayBtn = document.getElementById('today')
todayBtn.addEventListener('click', (event) => {
    clearContent()
    filterToday()
})