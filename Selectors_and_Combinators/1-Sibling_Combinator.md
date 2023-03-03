## Adjacent sibling combinator
* Identificado pelo sinal '+' entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

``` css
// Ele vai selecionar o botão do lado direito do primeiro e vai criar uma margem para o lado esquerdo de 5px.
    button + button {
        margin-left: 5px;
    }
```

## Dica
* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilização dos elementos.
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais efeiciente.