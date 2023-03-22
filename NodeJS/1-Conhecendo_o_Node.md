## Vantagens de usar o NodeJS
* rápido
* alta escalabidade
* aplicações de ponta
* JS em todo o lugar
* ecosistema gigante


## O que é o NodeJS
* É um ambiente de execução do JS
* Ele troca informações com o sistema operacional e o S.O troca informações com o hardware
* Ele não é um framework


## V8 motor de JS do Google Chrome
* Compõe o ambiente, a máquina virtual, que irá rodar o JS na máquina
* V8
    - Interpretador de JS para linguagem de máquina
    - Criado em C++
    - Baseado nas últimas features do JS
    - Focado para Chrome mas tem todo o cuidado de não quebrar o Node
    - Não possui a DOM, console ou File System


## Como funciona o NodeJS
* Vamos ver o motivo do Node ser tão rápido

* Imagine
    - Uma batalha entre 2 restaurantes
    - Qual terá o melhor atendimento?

* Restaurantes do Tio Apache
    * Diferencial: Cada cliente tem seu garçon
    - Um cliente vai fazer o pedido de uma pizza
        - Um garçon é direcionado até sua mesa
        - Pega o pedido e leva até a cozinha, para o chef preparar
        - O chefe, por regra do restaurante, irá proibir e bloqueado o garçon de voltar para o cliente, até que o pedido fique pronto
        - O cliente queria muito fazer mais pedidos, mas não pode, pois o garçon está bloqueado
        - Após o pedido ficar pronto, o garçon leva de volta para o cliente
        - O cliente foi embora e por regra do restaurante o garçon é despedido
    - Chegou 100 clientes numa noite
        - O gerente precisou contratar mais garçon...

* Restaurante do Noderson
    * Diferencial: O garçon de nome Eveneto Lupin
    - Mesa 1: O cliente vai fazer o pedido de uma pizza
        - Eveneto Lupin pega o pedido e leva para o chef
        - Volta com gosto de gás para a próxima mesa
    - Mesa 2: O cliente faz o pedido de uma salada
        - Eveneto Lupin já pegou o pedido e levou para o chef
    - O chef tocou um sininho avisando que o pedido da mesa 1 já ficou pronyo e Eveneto corre para pegar e fazer a entrega do pedido

* Decifrando
    - Tio apache: Apache
    - Noderson: Node
    - Cliente: Usuário
    - Pedido: Request
    - Garçon: Thread
    - Cozinha: Servidor
    - Chef: Banco de dados
    - Eveneto Lupin: Event loop

* Node é single-threaded, non-blocking e asynchronous


## História do Node
* Criado por Ryan Dahi em 2009
* NPM Versão 1 em 2011 https://npm.js.org
    - Compartilhamento de bibliotecas
    - Grande mudança na manutenção e compartilhamento de códigos
* 2015 Node.js Foundation
    - Incluiu: IBM, Microsoft, PayPal e Groupon
    - Passou a fazer parte do https://openjsf.org/
* https://github.com/nodejs/node
* Comunidade ativa!