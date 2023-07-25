const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação comeã pelo numero 
//console.log(pilotos[0]) // Senna

// Acessar o tamanho do array
//console.log(pilotos.length)

// iterável
// for (let piloto of pilotos) {
//     console.log(piloto)
// }

// adicionar elementos
// pilotos.push('Alonso')

// Encontrar elementos
// const senna = pilotos.find(piloto => piloto === 'Senna')
// console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos)