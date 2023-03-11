// Navegando pelos elementos
// PAIS
// parentNode/ parentElement -> procurar o pai do seletor selecionado
const body = document.querySelector("body")
console.log(body.parentNode) // Procurando qual é o pai do body


// FILHOS
// childNodes/ children -> pegar todos os filhos do seletor selecionado
console.log(body.childNodes)
console.log(body.children) // HTMLcollection

// firstChild/ firstElementChild -> Escolhe o primeiro filho do seletor selecionado
console.log(body.firstElementChild)

// lastChild/ lastElementChild -> Escolhe o último filho do seletor selecionado
console.log(body.lastElementChild)


// IRMÃOS
// nextSibling/ nextElementSibling -> Pega o irmão próximo ao seletor selecionado
console.log(body.nextElementSibling)

// previousSibling/ previousElementSibling -> Pega o irmão anterior ao seletor selecionado
console.log(body.previousElementSibling)