## NPM

Node Package Manager

__Glossary: Dependencies, packages, modules

* Verificar se temos o npm instalado "npm-v"
* Criar nosso próprio pacote
* O que é o arquivo package.json
* Utilizar módulos de terceiros
* O que é o diretório node_modules
* O que é o arquivo package_lock.json
* Criar scripts para rodar com o npm


## Iniciando um pacote NPM

npm init -> criar o NPM
npm init -y -> criar o NPM dando yes para todas as perguntas


## package.json
* É um arquivo no formato de JSON - JavaScript Object Notation


## Instalando módulos
npm install -> Vai instalar qualquer módulo no repositório do NPM
npm install 'repository' -D -> Dependencia somente para desenvolvimento
npm update -> Vai atualizar o package-lock.JSON


## O que é o diretório node_modules
* É onde fica todos os arquivos necessários para rodar o módulo instalado
* Não enviar esse diretório para o GIT, por isso tem que criar um .gitignore dentro da pasta
    * Dentro do .gitignore
        - node_modules/


## package-lock.json
* Não mexa nesse arquivo
* Ele serve para fazer um mapeamento das dependências que tem em seu projeto


## Criando e rodando scripts
npm run 'nome abaixo do script' -> Rodar o script