// Alterando estilos
// Adicionando estilo em linha
const element = document.querySelector("body")
element.style.backgroundColor = blue
element.style.color = white


// ClassList
// Ele olha as classes que tem no seletor selecionado, remove(revome()) classes, adiciona(add()) classes, toggle() ele remove a class se exitir ou adiciona se não existir.
const elemento = document.querySelector("body")
elemento.classList.add("green")
elemento.classList.remove("green")
elemento.classList.toggle("green")
console.log(elemento.classList)
