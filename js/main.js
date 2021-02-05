/*
Comentário em JS
*/

var nome = "Shuruder";
//variaveis podem ser colocadas na mesma linha e são identificadas conforme os dados passados
var idade = 27, idade2= 21;
var frase = "Japão faz pizza boa!"
//alert(nome " tem " + idade + " anos")
//alert(idade + idade2);

//testando o console no navegador
console.log(nome);
console.log(idade + idade2);
//comandos que funcionam normalmente também operam no log

//Ira mostrar Brasil faz pizza boa!
console.log(frase.replace("Japão", "Brasil"));

//Mostra JAPÃO FAZ PIZZA BOA!
//Variações como toLowerCase()
console.log(frase.toUpperCase());