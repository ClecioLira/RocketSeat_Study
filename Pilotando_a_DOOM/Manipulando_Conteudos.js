// Manipulando conteúdo
// textContent
// Ele altera ou concatena um novo texto para o seletor selecionado
//const element = document.querySelector('h1')
//element.textContent = 'Olá Mundo!'


// innerText
// Ele vai trocar o texto interno do seu elemento HTML selecionado
//const element = document.querySelector("h1")
//element.innerText = "Olá Mundo!"


// innerHTML
// Ele adiciona tags HTML dentro do texto
//const element = document.querySelector("h1")
//element.innerHTML = "Olá Mundo! <strong>!!!</strong>"


// value
// Manipula/ Altera/ Verifica o valor
const element = document.querySelector("input")
element.value = "Valor que eu quiser"
console.log(element.value)


// Atributos
// Adicionar um atributo no elemento selecionado
const header = document.querySelector("header")
header.setAttribute("id, cabecalho") // aqui adicionamos um ID = cabecalho na tag header
const headerID = document.querySelector("header")
console.log(headerID)
// Remover um atributo no elemento selecionado
header.removeAttribute("id") // aqui removemos o atributo ID
console.log(headerID)