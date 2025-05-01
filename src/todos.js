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

// export let data = [
//     {
//         title: 'Make new app',
//         details: 'Todo app from TOP',
//         importance: 'medium',
//         due: '',
//         done: false,
//         project: 'default',
//         id: ''
//     },
//     {
//         title: 'Make grocery list',
//         details: 'Make sure to figure out what you need for Seattle',
//         importance: 'low',
//         due: '',
//         done: false,
//         project: 'default',
//         id: ''
//     }
// ]


export function giveID() {
    data.forEach((item) => {
        let id = self.crypto.randomUUID();
        item.id = id
    })
    
}
giveID()

// const dataFromStorage = localStorage.getItem('itemData')
// const itemData = JSON.parse(dataFromStorage)

export function toLocalStorage() {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem('itemData', stringifiedData)
}
toLocalStorage()

// function delFunction() {
//     let buttonId = this.parentNode.parentNode.getAttribute("id")
//     const targetItemId = buttonId
//     // function getItem(item) {
//     //     return item.id === targetItemId
//     // }

//     function isItem(item) {
//         return item.id === targetItemId
//     }

//     let targetItem = data.find(isItem)

//     //finds the index
//     function itemIndex(id) {
//         return id === targetItem
//     }
    
//     let idx = data.findIndex(itemIndex)
//     console.log(idx)

//     const remove = data.splice(idx, 1)
//     remove
// }