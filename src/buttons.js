export const dialog = document.querySelector("dialog");
export const showButton = document.querySelector("dialog + button");
export const closeButton = document.querySelector("dialog button");
export const confirmBtn = document.getElementById('confirmBtn');
export const deleteBtn = document.querySelector(".delete");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

//Add book to library (and many duplicated functions)
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close();
});
