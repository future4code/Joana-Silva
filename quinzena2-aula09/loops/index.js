//1. O que o código abaixo está fazendo? 
//Está representando um evento que se repete, enquanto "valor" for < que 5
// ele vai incrementar um número e o código vai rodar até chegar ao número 5.

//Qual o resultado impresso no console? R:10


let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//2. Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//a) O que vai ser impresso no console?
// R: "19, 21, 23, 25, 27 30"

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...`
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R: É sim o suficiente, seria só eu criar a variavel i = 0 e dar console.log na var i 
// e incrementar i++.
/*Exemplo: const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
           for (let numero of lista) {
           console.log(lista.indexOf()); 
           } */

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

    /* Resposta: *
                 **
                 ***
                 ****  
    */
    

    //Exercícios de escrita de código**
     //1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

        //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um,
        // e guarde esses nomes em um array

        //c) Por fim, imprima o array com os nomes dos bichinhos no console

        let petUsuario = Number(prompt('Quantos animais de estimação você tem?'))
        if (petUsuario === 0) {
            console.log("Que pena! Você pode adotar um pet!")
        } for (let i = 0; i < petUsuario; i++) {
           let arrayNomePet = []
           let nomePetUsuario = prompt("Que legal! Digite o nome de um do seus pet!")
           arrayNomePet = nomePetUsuario
        
           console.log(nomePetUsuario)
        }
        
        

    // 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto
    // somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
    // realizando as operações pedidas:

      const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    //     a) Escreva um programa que **imprime** cada um dos valores do array original.

               for (let arrayDeNumeros of arrayOriginal) {
                   console.log(arrayDeNumeros)
               }

    // //     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
             
                for (let arrayDeNumeros of arrayOriginal) {
                   console.log(arrayDeNumeros / 10)
                 }

    // //     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do
    // //        array original e **imprima** esse novo array
             
              function retornaNumeroPar(arrayOriginal) {
                  let numeroPar = []
                  for (let i = 0; i < arrayOriginal.length; i++){
                      if (arrayOriginal[i] % 2 === 0) {
                          numeroPar.push(arrayOriginal[i])
                      }
                  }
                  return numeroPar
              }
               console.log(retornaNumeroPar(arrayOriginal))

    //     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    //     "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

          function novoArrayDeString() {
              let arrayString = []
              let i = 0
              for (let numerosArray of arrayOriginal) {
                  arrayString.push(`O elemento do índex ${i} é: ${numerosArray}`); i++;

              }
              return arrayString
          }
           console.log(novoArrayDeString())

    //     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
          
        function retornaMaioreMenor() {

          let maiorNumero = 0
          let menorNumero = 9999999
          for (let numeros of arrayOriginal) {
          if (numeros > maiorNumero) {
             maiorNumero = numeros
             } if (numeros < menorNumero) {
                 menorNumero = numeros
             } 
          }
          return [maiorNumero, menorNumero]

         }
         
         let retorno = retornaMaioreMenor()
         console.log(`Maior número é: ${retorno[0]} e o menor é:${retorno[1]}`) 
          
        
          
        
          
          
        

    