import { dialog, showButton, closeButton, confirmBtn, deleteBtn } from "./buttons.js"

dialog
showButton
closeButton
confirmBtn
deleteBtn

export const data = [
    {
        title: 'Make new app',
        details: 'Todo app from TOP',
        importance: 'medium',
        due: '',
        done: false,
        id: ''
    },
    {
        title: 'Make grocery list',
        details: 'Make sure to figure out what you need for Seattle',
        importance: 'low',
        due: '',
        done: false,
        id: ''
    }
]


export function giveID() {
    data.forEach((item) => {
        let id = self.crypto.randomUUID();
        item.id = id
    })
    
}
giveID()

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