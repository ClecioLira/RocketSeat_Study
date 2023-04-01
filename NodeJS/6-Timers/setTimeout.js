// setTimeout roda uma função depois de X milissegundos

const timeout = 2000
const timeout2 = 4000
const timeout3 = 6000
const msg1 = () => console.log("Tudo bem?")
const msg2 = () => console.log("Como foi seu dia?")
const msg3 = () => console.log("Aprendeu algo novo?")

setTimeout(msg1, timeout)
setTimeout(msg2, timeout2)
setTimeout(msg3, timeout3)
// Assincronismo
console.log("Olá")