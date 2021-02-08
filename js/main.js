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
/*
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
*/

// Condicionais, laços de repetição e date

/*
//var idade = 18
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/

// laços de repetição

/*
var count = 0;
while(count <5){
    console.log(count);
    count++;
}
*/

/*
var count;
for(count=0; count <=5; count++){
   // alert(count);
}

// date
var d = new Date();
//exemplo de uso no alert
alert(d.getHours());
*/

// Desenvovendo páginas - Funções


function soma(n1,n2){
    return n1 + n2;
}

/*

//validar no caso está como variavel global, dentro da função
//ficaria como local
var validar = 0;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);

*/

function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    //abre nova janela
    //window.open("https://www.google.com/");

    //abre na mesma janela
    window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o Mouse!";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o Mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}