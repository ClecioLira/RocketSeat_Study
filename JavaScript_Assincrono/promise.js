/*
    Promise

    A promessa de que algo irá acontecer
    Poderá dar certo ou errado, mas irá acontecer.
*/

let aceitar = true

console.log('Pedir uber')

const promessa = new Promise((resolve, reject) => {

    if (aceitar) {
        return resolve('Pedido aceito!')
    }
    return reject('Pedido negado!')

})
promessa
    .then(result => console.log(result)) // Pega o resultado que deu certo
    .catch(erro => console.log(erro)) // Pega o resultado que deu errado
    .finally(() => console.log('Finalizado.')) //Finalizando a promessa

console.log('Aguardando...')
