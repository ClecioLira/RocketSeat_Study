// setTimeout roda uma função depois de X milissegundos

const timeout = 3000
const finished = () => console.log("Demoro o tempo do timeout para aparecer")

setTimeout(finished, timeout)
// Assincronismo
console.log("Mostrar!")