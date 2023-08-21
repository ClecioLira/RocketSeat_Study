import axios from 'axios'

Promise.all([
    axios.get('https://api.github.com/users/maykbrito'),
    axios.get('https://api.github.com/users/maykbrito/repos')
])
.then(responses => {
    responses[0].data.login
    responses[1].data.length
})
.catch(erro => console.log(erro.message))