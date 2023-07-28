# Paradigmas
    Programação imperativa
        O codigo é pensado e gerado em sequencia
        O codigo é pensado como um passo-a-passo, como uma receita de bolo
        Uma coisa depende da outra
        O estado de um dado é alterado constantemente causando mutações nas variaveis
        Orientação a objetos é um tipo de paradigma imperativo

    Programação declarativa
        O codigo é gerado para fazer algo, não importa como
        O que fazer e não como fazer
        Não há necessidade de um passo a passo no codigo
        Programação funcional é um tipo de paradigma declarativo

# Dados
    Imutabilidade
        Uma variavel não vai variar
        Se voce precisar mudar uma variavel, voce não muda, voce cria uma nova variavel
    Stateless
        Nao guarda estado
        A função so conhece dados entregues a ela
        A resposta não podera variar

# Funções
    Independentes
        Devera ter ao menos 1 argumento
        Devera retornar algo
        Nada que acontecer la dentro afeta o mundo externo
            Dados imutaveis
            Nao guarda estado
        Nao faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos a recursão (a funcao chama ela mesma)
    Puras
        Não devera depender de nenhum dado externo a nao ser o que foi passado como argumento
        Não devera sofrer nenhuma interferencia do mundo externo a ela
        Se o argumento é o mesmo, o retorno nao podera ser diferente quando a funcao for chamada novamente
            Nao ira modificar nenhum dado
            Nao ira guardar nenhum estado
    Higher-order
        Funcoes que recebem funcoes como argumentos
        Funcoes que poderao retornar outras funcoes
    First-class
        podem estar em qualquer lugar, inclusive, como parametro de outras funcoes
        A funcao podera ser entendida como uma variavel
    Composição
        Um encadeamento de funcoes
        Uma funcao que retorna um dado e vai pra outra funcao, que retorna um dado e vai para outra funcao, que retorna...


