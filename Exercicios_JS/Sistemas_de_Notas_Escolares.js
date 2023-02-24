/*
    Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 pra cima - A
* entre 80 - 89  - B
* entre 70 - 79  - C
* entre 60 - 69  - D
* menor que 60   - F

*/

function sistemChar(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota <= 60 && nota >= 0

    if (notaA) {
        console.log("Sua nota é A")
    } else if (notaB) {
        console.log ("Sua nota é B")
    } else if (notaC) {
        console.log ("Sua nota é C")
    } else if (notaD) {
        console.log ("Sua nota é D")
    } else if (notaF) {
        console.log ("Sua nota é F")
    } else {
        console.log("Nota inválida")
    }
}

sistemChar(-1)
sistemChar(0)
sistemChar(59)
sistemChar(60)
sistemChar(69)
sistemChar(70)
sistemChar(79)
sistemChar(80)
sistemChar(89)
sistemChar(90)
sistemChar(100)
sistemChar(101)