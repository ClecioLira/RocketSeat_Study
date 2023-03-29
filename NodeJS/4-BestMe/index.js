// Ele escreve a saída padrão do processo
// process.stdout.write("Olá, mundo! \nTudo bem com vocês?")

const questions = [
    "O que aprendi hoje?", // 0
    "O que me deixou aborrecido?", // 1
    "O que eu poderia fazer para me sentir melhor?", //2
    "O que me deixou feliz hoje?", // 3
    "Quantas pessoas eu ajudei hoje?", // 4
]
const ask = (indice = 0) => {
    process.stdout.write("\n" + questions[indice] + " > ")
}
ask()


const answers = []
// Ouve eventos
process.stdin.on("data", data => { // Rodar a função todas as vezes que forem inseridos dados
    answers.push(data.toString().trim() + "\n\n")// trim() remove espaços vazios
    if (answers.length < questions.length) { // Fazer todas as perguntas
        ask(answers.length)
    } else {
        console.log(answers) // Ver as respostas
        process.exit() // Desligar o processo
    }
})