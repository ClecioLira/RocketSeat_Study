const {EventEmitter} = require('events');
const emitir = new EventEmitter();

emitir.on("nome do emit", (mensagem) => {
    console.log("Eu ouvi você!", mensagem)
}) // Aqui é onde eu ouço o evento

emitir.emit("nome do emit", "Clécio") // Aqui eu emitir o evento porém falta eu ouvir ele
emitir.emit("nome do emit", "Cauã")