// 1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // Resultado será false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // Resultado será false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // Resultado será false

console.log("d. ", typeof resultado) // Resultado será boolean 

/* 2- Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?*/

*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) /*Irá aparecer dois números ao invés de aparecer a soma, pois ele esqueceu de colocar 
a função Number() antes do prompt, pois prompt só ler string se não usar a função Number() antes.*/

/*3 - Para o exercício anterior, sugira ao seu colega uma solução para que o 
valor impresso no console seja, de fato, a soma dos dois números.

RESPOSTA - Ele poderia usar a função Number() 
EX:*/ let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*1 - Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
 seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

const suaIdade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

resultado = suaIdade >= idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log(suaIdade - idadeAmigo)

/* 2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/

    let numero = Number(prompt("Insira um número par!"))
    let restoDivisao = numero % 2

    console.log(restoDivisao) //Com números pares o resultado sempre é 0 porque não tem resto.
    // Se inserir um número impar passa a ter resto.

    /*3- Faça um programa que pergunte ao usuário sua idade em anos. 
    Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas */

    let idade = Number(prompt("Digite sua idade!"))
    console.log(idade * 12)
    console.log(idade * 365)
    console.log(365 * 24 * 60 * idade)

    

    

    /*4. Faça um programa que pergunte ao usuário dois números. 
    Em seguida, faça as operações e imprima no console as seguintes mensagens:
    O primeiro numero é maior que segundo?
    O primeiro numero é igual ao segundo?
    O primeiro numero é divisível pelo segundo?
    O segundo numero é divisível pelo primeiro?*/

    const primeiroNumero = Number(prompt("Digite um número!"))
    const segundoNumero = Number(prompt("Digite outro número!"))

    console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
    console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
    console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
    console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)



