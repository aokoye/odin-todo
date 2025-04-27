import { data } from './todos'

export const newTodo = data[0].title
export const id1 = data[0].id
export const id2 = data[1].id


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
