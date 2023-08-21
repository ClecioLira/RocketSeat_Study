const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2' // fazendo um fetch

https.get(API, res => {
    console.log(res.statusCode) // retorna 200 caso dê certo
    // isso é uma CALLBACK
    // é executado depois de um certo tempo
})
console.log('conectando API')