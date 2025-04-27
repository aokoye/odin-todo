export const data = [
    {
        title: 'Make new app',
        details: 'Todo app from TOP',
        importance: 'medium',
        done: false,
        id: ''
    },
    {
        title: 'Make grocery list',
        details: 'Make sure to figure out what you need for Seattle',
        importance: 'low',
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