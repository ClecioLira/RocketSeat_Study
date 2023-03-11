// Navegando pelos elementos
// parentNode/ parentElement -> procurar o pai do seletor selecionado
const body = document.querySelector("body")
console.log(body.parentNode) // Procurando qual é o pai do body


// childNodes/ children -> pegar todos os filhos do seletor selecionado
console.log(body.childNodes)
console.log(body.children) // HTMLcollection

// firstChild/ firstElementChild -> Escolhe o primeiro filho do seletor selecionado
console.log(body.firstElementChild)

// lastChild/ lastElementChild -> Escolhe o último filho do seletor selecionado
console.log(body.lastElementChild)