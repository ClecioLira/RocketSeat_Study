// clearTimeout cancela um setTimeout

const timeout = 3000
const finished = () => console.log("Done!")

let timer = setTimeout(finished, timeout)
clearTimeout(timer) // Cancelou a variável timer