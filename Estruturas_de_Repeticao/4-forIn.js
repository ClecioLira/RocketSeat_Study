//for ... in
//ele pega as propriedades do objeto criado

let person = {
    name: 'John',
    age : 30,
    weight: 88.6
}

for (let propety in person) {
    console.log(propety)
    console.log(person[propety])
}