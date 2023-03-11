// Criando e adicionando elementos na página
// CRIAR
// createElement
const div = document.createElement("div") // criei uma div no HTML
div.innerText = "Olá, mundo!"


// ADICIONAR
// append/ prepend
const body = document.querySelector("body")
body.append(div) // adicionei o elemento na última linha do body no HTML
body.prepend(div) // adicionei o elemento na primeira linha do body no HTML

// insertBefore -> adicionar o novo elemento antes do seletor selecionado
const script = body.querySelector("script")
//                el criado  seletor selecionado
body.insertBefore(div,       script)
// gambiarra para adicionar o novo elemento após o seletor selecionado
body.insertBefore(div, script.nextElementSibling)