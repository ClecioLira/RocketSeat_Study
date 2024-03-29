## O que é um banco de dados?
    É um local onde vai guardar informações de modo sistêmico.
    É uma forma digital para organizar e guardar os dados.

## Serviços de bancos de dados
- SQlite
- MariaDB
- MySQL
- Oracle
- Redis
- MongoDB
- PostgreSQL
- Firebase

## Tabelas
    As informações são organizadas em tabelas.

## Campos
    São os titulos das informações que colocaremos nas tabelas.

## Informações
    São os cadastros feitos em cada campo da tabela.


## Tipos de campo
* text = relacionado a informações como frases e nomes
* number = apenas para números
* datatime = apenas paras datas com números e traços
* primary key = identificador único

## Regras para escrever nome de tabelas e campos
* Deve sempre começar por uma letra do alfabeto
* Os caracteres seguintes não são permitidos = () + - / * " ; & | # < > ´ {} % 
* Não pode conter espaços
* Não pode conter acentuação


## Comandos
SELECT = buscar informações
* = todos os campos
FROM = de qual tabela
WHERE = procurar uma informação específica
like = parecido, contendo, é igual


## Operadores relacionais
=, quando queremos pegar apenas um único usuário da nossa tabela
like = ele tem a mesma função que o igual porém é usado para procurar textos "procure a informação dentro de aspas"
"> = maior que tal number"
"< = menor que tal number>"
">= = maior ou igual a que"
"<= = menor ou igual a que>"
<> = não igual a
!= = diferente de


## Operadores matemáticos
+, adição = faz a soma para chegar a informação desejada
-, subtração = faz a subtração para chegar a informação desejada
*, multiplicação = faz a multiplicação para chegar a informação desejada
/, divisão = faz a divisão para chegar a informação desejada
%, modulo/ resto = faz a divisão e ver qual será o resto dessa divisão para dar a informação desejada


## Operadores lógicos
AND = juntar 2 condições
OR = ambas condições vão ser realizadas se forem true
BETWEEN/ NOT BETWEEN = entre intervalos
IN/ NOT IN = quais informações queremos encontrar dentro de ()
IS NULL/ IS NOT NULL = procurar informações nulas ou não nulas


## Mais comandos
INSERT INTO = Inserir dados na tabela
INSERT INTO aluno (nome, cpf, responsavel) VALUES ('Maria Luiza', 12345678978, 'João Paulo')

UPDATE = Alterar algum dado já inserido na tabela
UPDATE aluno SET nome = 'Mariana Luiza' WHERE matricula = 2

DELETE = Apagar uma informação do nosso banco de dados
DELETE FROM aluno WHERE matricula = 2