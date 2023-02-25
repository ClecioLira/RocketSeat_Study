/*
    Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

// transform('50F')
function transform(degree) {
    const celsius = degree.toUpperCase().includes('C') //Analisando se tem a letra C
    const fahrenheit = degree.toUpperCase().includes('F') //Analisando se tem a letra F

    if (!celsius && !fahrenheit) { //Aqui ele encontra o erro caso digitem a temperatura sem o 'F' ou sem o 'C'
        throw new Error ('Temperatura não encontrada. Digite "C" ou "F" no final do número.')
    }

    //Caminho F -> C
    if (fahrenheit) {
        novoDegree = Number(degree.toUpperCase().replace('F', '')) //Transformando em um number e tirando a letra F para depois colocar a letra C
        formula = fah => (fah - 32) * 5/9 //Formula que calcula o valor em fahrenheit
        novoSimb = '°C' //Concatenando o simbolo
    }
    //Caminho C -> F
    if (celsius) {
        novoDegree = Number(degree.toUpperCase().replace('C', '')) //Transformando em um number e tirando a letra C para depois colocar a letra F
        formula = cel => cel * 9/5 + 32 //Formula que calcula o valor em Celsius
        novoSimb = '°F' //Concatenando o simbolo
    }

    return formula(novoDegree) + novoSimb //Retorna o valor da função
}

try {
    console.log(transform('50c'))
    console.log(transform('50f'))
    console.log(transform('50a'))
} catch (error) {
    console.log(error.message)
}