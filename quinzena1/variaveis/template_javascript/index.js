/* 1 - console.log(b) = "10" 
console.log(a,b) = "10,5" */

// 2- console.log(a,b,c) = "20,10"

/* 3- let horas = prompt("Quantas horas você trabalha por dia?")
let salario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horas/psalario} por hora`) */

// Exercicio 1

let nome 
let idade 


console.log(typeof nome) // aparecu underfined porque não foi declarado nenhum valor na variável
console.log(typeof idade) // aparecu underfined porque não foi declarado nenhum valor na variável

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) // apareceu string porque a variavel se trata de é um texto.
console.log(typeof idade) // apareceu string porque apesar de ser um numero a variavel se trata de um texto

console.log("Olá", nome, "você tem", idade, "anos")

// Exercicio 2

let pergunta1 = "Você tem olhos azuis?"
let pergunta2 = "Você está de blusa rosa?"
let pergunta3 = "Você está sentado?"

let respota1 = "sim"
let resposta2 = "nao"
let resposta3 = "sim"



console.log(pergunta1, respota1, pergunta2, resposta2, pergunta3, resposta3)

// Exercicio 3

let a = 10
let b = 25
let c = 0

c = a // Aqui faremos uma lógica para trocar os valores
a = b // Aqui faremos uma lógica para trocar os valores
b = c // Aqui faremos uma lógica para trocar os valores


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10






















