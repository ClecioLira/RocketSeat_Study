/*
    Buscando e contando dados em array

    Baseado no array de livros por categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/
//Const com as categorias, livros e autores
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segreedos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },

    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    }
]

//Function para saber o total de categorias
function totalCategorias() {
    const totalCategories = booksByCategory.length
    let msgCategories = `Total de categorias: ${totalCategories}`
    console.log(msgCategories)
}
//Function para saber o total de livros de cada categoria
function totalLivros() {
    for (let category of booksByCategory) {
        let msgTotalLivros = `Total de livros da categoria ${category.category}: ${category.books.length}`

        console.log(msgTotalLivros)
    }
}
//Function para saber o total de autores
function contarAutores() {
    let authors = []
    
    for (let category of booksByCategory) {
        for (let books of category.books) {
            if (authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            }
        }
    }
    let msgAuthor = `Total de autores: ${authors.length}`

    console.log(msgAuthor)
}
//Function para mostrar os livros de acordo com o nome dos autores
function mostrarLivrosAutor(author) {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    let msgBooks = `Livros do autor ${author}: ${books.join(", ")}`
    console.log(msgBooks)
}

totalCategorias()
totalLivros()
contarAutores()
mostrarLivrosAutor("Augusto Cury")