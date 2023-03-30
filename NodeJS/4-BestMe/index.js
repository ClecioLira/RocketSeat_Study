// Ele escreve a saída padrão do processo
// process.stdout.write("Olá, mundo! \nTudo bem com vocês?")

const questions = [
    "Olá qual o seu nome?", // 0
    "O que aprendi hoje?", // 1
    "O que me deixou aborrecido?", // 2
    "O que eu poderia fazer para me sentir melhor?", // 3
    "O que me deixou feliz hoje?", // 4
    "Quantas pessoas eu ajudei hoje?", // 5
]
const ask = (indice = 0) => {
    process.stdout.write("\n" + questions[indice] + " > ")
}
ask()


const answers = [] // Array que receberá as respostas
// Ouve eventos
process.stdin.on("data", data => { // Rodar a função todas as vezes que forem inseridos dados
    answers.push(data.toString().trim())// trim() remove espaços vazios
    if (answers.length < questions.length) { // Fazer todas as perguntas
        ask(answers.length)
    } else {
        // console.log(answers) // Ver as respostas
        process.exit() // Desligar o processo
    }
})


process.on("exit", () => { // Mostrar as perguntas e respostas no final do app
    console.log(`
        Bacana ${answers[0]}!

        O que você aprendeu hoje foi:
        - ${answers[1]}

        O que te aborreceu foi:
        - ${answers[2]}

        O que você poderia fazer para se sentir melhor foi:
        - ${answers[3]}

        O que te deixou feliz foi:
        - ${answers[4]}

        As pessoas que você ajudou foram:
        - ${answers[5]}

        Volte amanhã e faça novas reflexôes!!
    `)
})