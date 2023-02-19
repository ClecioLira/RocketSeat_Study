//Manipulando strings e numbers
//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_".

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(" ")//string para array
let phraseWithUnderscore = myArray.join("_")//array para string
console.log(phraseWithUnderscore)