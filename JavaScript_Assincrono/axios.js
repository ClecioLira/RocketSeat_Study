import axios from "axios";

// Encadeamento de promessas
axios
    .get('https://api.github.com/users/maykbrito')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.error(error))