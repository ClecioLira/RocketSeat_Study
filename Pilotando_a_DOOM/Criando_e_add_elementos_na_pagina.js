// Criando e adicionando elementos na página
// createElement
const div = document.createElement("div") // criei uma div no HTML
div.innerText = "Olá, mundo!"

// append/ prepend
const body = document.querySelector("body")
body.append(div) // adicionei o elemento na última linha do body no HTML
body.prepend(div) // adicionei o elemento na primeira linha do body no HTML
