/*
    Falsy
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicional e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( "" ? 'Verdadeiro' : 'Falso')


/*
    Truthy
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -infinity
*/
console.log( 3.23 ? 'Verdadeiro' : 'Falso')