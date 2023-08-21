const promessa = new Promise (function (resolve, reject) {
    return resolve ('Ok')
})

// Jeito Normal
// promessa
//     .then (function (response) {
//         console.log (response)
//     })
//     .catch (function (error) {
//         console.log (error)
//     })
//     .finally (function () {
//         console.log('Rodar sempre')
//     }

// Jeito com o async
async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('Rodar sempre')
    }
}

start()