const {EventEmitter} = require('events');
const emitir = new EventEmitter();

emitir.once("nome do emit", (mensagem) => { // o once ouve apenas o primeiro emit
    console.log("Eu ouvi você!", mensagem)
}) // Aqui é onde eu ouço o evento

emitir.emit("nome do emit", "Clécio") // Aqui eu emitir o evento porém falta eu ouvir ele
emitir.emit("nome do emit", "Cauã")