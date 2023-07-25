## Porque estudar estrutura de dados?
Organizar os dados da aplicação
Entedner estruturas para melhor tomada de decisão
Escrever melhores algoritmos
Eficiência
Algumas empresas usam como requisito


## O que é estrutura de dados?
É uma maneira de organizar e ordenar informações como textos, números, booleanos, etc e registrá-los na memória do computador.


## Gerenciando dados
Estrutura de dados tem a ver com a gestão das informações da aplicação.
Para esse gerenciamento, podemos dividir em 3 etapas:
    Modelar a estrutura;
    Dar vida á estrututra
    Criar funcionalidades dessa estrutura
        Exemplo: inserir, excluir, buscar, exibir, contar...


## Arrays
É uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programaçao.
Uma das estruturas mais básicas, simples de criar e utilizar.

Caracteristicas:
    Acesso pelo index
    Respeita a ordem de inserção dos elementos
    Aceita valores duplicados
    Dependendo do tamanho do array da para encontrar e/ou deletar um elemento, será necessário um uso maior de performace.

Array no JS:
    São dinâmicos
    Você poderá ter dados de diferentes tipos misturados dentro de um array. Strings, numbers, booleans, objetos, funções e até outros arrays
    Existem muitos métodos já implementados
        push(), pop(), find(), filter(), entre outros.


## Matriz
Significa que é um array dentro de outro array
Poderemos ter muitos niveis


## Stack
Strack é pilha como uma pilha de livros.
    Linear, um após o outro
    O último a entrar na pilha é o primeiro a sair

Last in first out
    O ultimo elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair.

Metodos fundamentais
    push(): adiciona um elemento a pilha
    pop(): remover o elemento do topo da pilha
    peek(): obter o elemento do topo da pilha
Outros metodos poderão ser implementados como size() para mostrar o tamanho da pilha


## Queue
Significa fila, como uma fila em uma loja ou restaurante
    Linear
    O primeiro a entrar na fila é o primeiro a sair

First in first out
    O primeir elemento a entrar é o primeiro a sair
Front é a referencia do primeiro elemento a entrar na fila
Back é a referencia do ultimo elemento a entrar na fila

Metodos fundamentais
    enqueue(): adicionar um elemento ao final da fila
    dequeue(): remover o primeiro elemento a entrar na fila

Outros metodos poderao ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre outros tantos.