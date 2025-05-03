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
    let impSelect = document.getElementById('importance')
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
