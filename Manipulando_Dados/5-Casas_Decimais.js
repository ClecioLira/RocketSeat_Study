// Manipulando String e Numbers
// Transformar um número quebrado com 2 casas decimais
// Trocar ponto por vírgula

let number = 125.624646
console.log(number.toFixed(2).replace('.', ','))
//toFixed ajeita as casas decimais
//replace troca os pontos
//CUIDADO tipo Number() não aceita virgula e sim ponto