// Modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    // adicionar elemento
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    // remover elemento
    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    // retorna qual é o ultimo elemento da pilha
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}
// Utilizando
const stack = new Stack()

// adicionando dados
stack.push('learning')
stack.push('data')
stack.push('top')
stack.pop()


console.log(stack.peek())