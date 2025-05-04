import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn
deleteBtn

export let data = localStorage.getItem('itemData') ?
JSON.parse(localStorage.getItem('itemData')) : []

export let project = localStorage.getItem('projectData') ?
JSON.parse(localStorage.getItem('projectData')) : []


export function giveID() {
    data.forEach((item) => {
        let id = self.crypto.randomUUID();
        item.id = id
    })
    
}
giveID()

export function toLocalStorage() {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem('itemData', stringifiedData)
}
toLocalStorage()
