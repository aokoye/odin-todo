import { data, giveID, project, toLocalStorage } from './todos'

export const dialog = document.querySelector("dialog");
export const showButton = document.querySelector("dialog + button");
export const closeButton = document.querySelector("dialog button");
export const confirmBtn = document.getElementById('confirmBtn');
export const deleteBtn = document.querySelector(".delete");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
    console.log(project)

    let select = document.getElementById('projectOptions');
    let optElement = document.querySelectorAll('option')
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
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

//
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close();
});
