// Funcoes aceitam qualquer tipo de dado como argumento
function imprimirDados(dados) {
    console.log('outras tarefas')
    console.log(dados())
}

imprimirDados(function () {
    return 'Olá mundo'
})