// clearTimeout irá cancelar um setInterval registrado

const timeout = 2000
const checking = () => console.log("Checking!")

let interval = setInterval(checking, timeout)
// clearInterval(interval) // Vai cancelar o funcionamento da variavel interval

setTimeout ( () => clearInterval(interval), 10000) // vai executar a função durante um determinado tempo e depois que atingir esse tempo ele vai parar.