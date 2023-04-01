const {EventEmitter} = require('events');
const emitir = new EventEmitter();

emitir.emit("Diga algo!") // Aqui eu emitir o evento porém falta eu ouvir ele