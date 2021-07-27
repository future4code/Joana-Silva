// 1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. 03, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// 2- Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27 

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? 
//SUBI NUM ÔNIBUS EM MIRROCOS 27 

// 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
//Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeUsuario = prompt("Digite o seu nome!")
const emailUsuario = prompt("Digite o seu email!")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(O), ${nomeUsuario}!`)


// // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
// Em seguida, siga os passos:

let comidasFavoritas = ["Macarrão", "Pizza", "Churrasco", "Peixe", "Batata frita"]


// // a) Imprima na tela o array completo

console.log(comidasFavoritas)

// // b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida
// // por cada uma das comidas, **uma embaixo da outra**.

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 

const comida = prompt("Qual sua comida favorita?")

// //Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

let i = 0

comidasFavoritas[i+1] = comida


console.log(comidasFavoritas)

//3. Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

listaDeTarefas[0] = prompt("Qual é a primeira tarefa?")
listaDeTarefas[1] = prompt("Qual é a segunda tarefa?")
listaDeTarefas[2] = prompt("Qual é a terceira tarefa?")

//c) Imprima o array na tela

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

let tarefaFeita = Number(prompt("Digite o número da tarefa que você já fez, 0, 1 ou 2"))

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaFeita,1)

//f) Imprima o array na tela

console.log(listaDeTarefas)
