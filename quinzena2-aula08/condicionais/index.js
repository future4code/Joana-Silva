//1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Esse código é uma sintaxe para uma condicional e é usado para fazer  escolhas baseadas
// em algun critério. Se a condição for verdadeira, mostra uma mensagem "passou no teste",
// senão mostra uma menagem "Não passou no teste" O teste é para verificar se os números são pares ou ímpares.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Para números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números ímpares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar
// algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    

    // a) Para que serve o código acima? 
    //Para indicar a condição, se a váriavel for igual o case, o codigo de dentro será executado.
    //Esse código é switch case é utilizado para simplificar nosso código. Nesse caso o código
    //está sendo usado para retornar o preço de cada fruta. 

    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // "O preço da fruta, Maçã é, R$ 2.25"

    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
    // no console se retirássemos o `break` que está logo acima do `default` 
    //(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // A  mensagem seria ""O preço da fruta, Pêra é, R$ 5" 

    //Exercícios de escrita de código
    //1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode
    // dirigir (apenas maiores de idade).

    //a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

        const qualSuaIdade = (prompt("Qual a sua idade?"))

  // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

         const idadeUsuario = Number(qualSuaIdade)

  // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
 //Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

       if (idadeUsuario >= 18) {
           console.log("Você pode dirigir!")
       }
       else {
           console.log("Você não pode dirigir!")
       }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

const turno = prompt("Digite o turno que você estuda!! M (matutino), V (Vespertino e N (Noturno)")

if (turno.toUpperCase() === "M") {
    console.log("Bom Dia!")
} else if (turno.toUpperCase() === "V") {
    console.log("Boa Tarde!")
} else if (turno.toUpperCase() === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Digite um turno válido")
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turno.toUpperCase()) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite um turno válido!")
        break
}

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme
// com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
// e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga
// vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!",
// caso contrário, imprima "Escolha outro filme :("

const generoDoFilme = prompt("Qual gênero do que vocês irão assistir?").toLowerCase() === "fantasia"
const valorIngresso = Number(prompt("Qual o valor do ingresso?")) <= 15
const lanchinho = prompt("Qual lanche você vai comprar?")

if (generoDoFilme && valorIngresso) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}