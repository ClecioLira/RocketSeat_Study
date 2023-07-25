// Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou da fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}
// Utilizando
const fila = new Queue()

fila.enqueue('Clecio')
fila.enqueue('Joao')
fila.enqueue('Paulo')
fila.dequeue()
fila.dequeue()
fila.dequeue()