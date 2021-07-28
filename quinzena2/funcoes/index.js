//1. Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e 
// simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
//Somente irei executar o código duas vezes.
// O que apareceria no console? Nada pois não pedi para imprimir nada.

//2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade?
// Esta função é usada pra retornar saídas que podem ser acessadas após a execução.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` - TRUE
//      ii.  `CENOURA é bom pra vista` - TRUE
//      iii. `Cenouras crescem na terra` - FALSE

//1. Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem
// falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

   function imprimirIformacoesSobreMim() {
   console.log("Eu sou Joana, tenho 28 anos, moro em Rio de Janeiro e sou estudante")
}
   imprimirIformacoesSobreMim()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
//Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
// - Exemplo
// Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
//`"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

 function imprimirMinhasIformaoes(nome, idade, cidade, profissao) {
     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)

 }
 imprimirMinhasIformaoes("Joana", 28, "Rio de Janeiro", "estudante")

// 2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a
// soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

 function soma(numero1, numero2) {
     const soma = numero1 + numero2
     return soma
 }
  
  const resultado = soma(2, 8)
  console.log(resultado)

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro
// número é **maior ou igual** ao segundo.

function trueOrFalse(numero1, numero2) {
    const maiorOuIgual = numero1 >= numero2
    return maiorOuIgual
}
 const resultadoDoBooleano = trueOrFalse(6, 3)
 console.log(resultadoDoBooleano)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

  function devolverNumeroPar(numeroPar) {
    const resto = numeroPar % 2 === 0
    return resto 
  }
    const resultadoResto = devolverNumeroPar(8)
    console.log(resultadoResto)

// Outra forma de fazer o código:

   function devolverNumeroPar2(numeroPar2) {
       console.log(numeroPar2 % 2 === 0)
   }
      devolverNumeroPar2(9)

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
// juntamente com uma versão dela em letras maiúsculas.
 
   function recebeMensagem(string2) {
       const mensagemstring = string2.toUpperCase()
       const tamanhoString = mensagemstring.length

       console.log(mensagemstring, tamanhoString)
   }
   recebeMensagem("Olá meu nome é Joana e eu sou sagitariana")
    
//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
// pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    // Números inseridos: 30 e 3
    // Soma: 33
    // Diferença: 27
    // Multiplicação: 90
    // Divisão: 10


    const insiraUmNumero = Number(prompt("Insira um número!"))
    const insiraOutroNumero = Number(prompt('Insira outro número!'))

    function soma() {
        const somaNumero = insiraUmNumero + insiraOutroNumero

        console.log(somaNumero)

    }

    soma()


    function subtracao() {
        const subtrairNumero = insiraUmNumero - insiraOutroNumero
        console.log(subtrairNumero)

    }
    subtracao()

    function multiplicacao() {
        const multiplicaNumero = insiraUmNumero * insiraOutroNumero
        console.log(multiplicaNumero)

    }
    multiplicacao()

    function divisao() {
     const divideNumero = insiraUmNumero / insiraOutroNumero
     console.log(divideNumero)
    }
    divisao()


