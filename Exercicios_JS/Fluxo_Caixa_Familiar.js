/*
    Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    *receitas: []
    *despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas que irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguindo o valor do saldo.

*/

//Aqui fica os valores das receitas e das despesas
let gastos = {
    receitas: [1200, 300],
    despesas: [500.45, 50, 580, 100],
}

//Aqui fica uma function que faz a soma dos gastos resceitas/despesas. Foi criada com a ajuda do prof.
function soma(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

//Function que calcula os gastos e transmite as mensagens
function calcGastos() {

    let calcReceita = soma(gastos.receitas) //variável que soma os valores das receitas
    let calcDespesas = soma(gastos.despesas) //variável que soma os valores dos gastos
    let saldo = calcReceita - calcDespesas //variável que calcula o saldo

    let valReceita = `Valor de sua Receita: R$${calcReceita}` //variável com a mensagem dizendo o valor da receita
    let valDespesas = `Valor de suas Despesas: R$${calcDespesas}` //variável com a mensagem dizendo o valor da despesa
    let msgSaldo = `Saldo: R$${saldo.toFixed(2)}` //variável com a mensagem do saldo com valor decimal
    
    //Mensagens
    console.log(valReceita)
    console.log(valDespesas)
    console.log(msgSaldo)

    //Estrutura de repetição que avisa se o saldo está positivo ou negativo
    if (calcReceita > calcDespesas) {
        console.log('Saldo POSITIVO!')
    } else {
        console.log('Saldo NEGATIVO!')
    }

}

//chamando a função 
calcGastos()