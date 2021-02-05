/*
Comentário em JS
*/
/*
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
*/

//Agora aula sobre array e dicionário

//cria o array (lista)
var lista = ["maça", "pêra", "laranja"];

//mostra a lista como array e todos seus elementos
console.log(lista)

//incluindo elementos
lista.push("uva");
console.log(lista);

//remove o ultimo elemento
lista.pop();
console.log(lista);

//tamanho da lista
console.log(lista.length);

//reverter
console.log(lista.reverse());

//tranformando em string
console.log(lista.toString());

// Ao invés de virgula fica o traço na junção ou qualquer outro caractere
console.log(lista.join(" - "));

// Sobre dicionário agora:
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);

//obs podemos colocar o dicionário em uma lista simplesmente colocando entre [{}]