const path = require("path")
console.log(path.basename(__filename))


// Chamando um modulo de outro arquivo criado por mim
const myModule = require("./exports")
console.log(myModule)