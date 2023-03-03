## nth-child odd/even
* even - números pares
* odd - números ímpares

`:nth-child(odd)`
`:nth-child(even)`

```HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```
```CSS
// Vai mudar a cor das linhas ímpares
ul li:nth-child(odd) {
  color: gray;
}
```