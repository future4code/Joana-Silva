//1.  Leia o código abaixo

    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0]) //Matheus Nachtrgaele
    console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish  
    console.log(filme.transmissoesHoje[2]) // canal: Globo, horario: 14h

//     //a) O que vai ser impresso no console?
//     // Matheus Nachtrgaele
//     // Virginia Cavendish
//     // canal: Globo, horario: 14h

//     //2. Leia o código abaixo
    
    const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // nome:Juba, idade: 3, raca:SRD 
console.log(tartaruga) // nome: Jubo. idade:3 raca:SRD

//a) O que vai ser impresso no console?
// nome: "Juca", idade: 3, raca: "SRD"
// nome:Juba, idade: 3, raca:SRD
// nome: Jubo. idade:3 raca:SRD
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? 
//Ela é usada para fazer uma cópia inteira de um objeto para outro e mudar
//ou adicionar apenas uma ou outra propriedade.

//3. Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) //undefined

// //a) O que vai ser impresso no console?
//  false, undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//  Acho que isso aconteceu porque o return só está retornando a propriedade do objeto,
//  porque a propriedade está entre colchetes na váriavel objeto. E como só vou retornar a 
// propriedade que está dentro de objeto eu vou retornar um false e na const objeto não existe 
// altura então o retorno foi underfined.

//1. Resolva os passos a seguir: 

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
// (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função
// que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
//// Exemplo de entrada
//const pessoa = {
//  nome: "Amanda", 
//apelidos: ["Amandinha", "Mandinha", "Mandi"]
// Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da
// propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função
// feita no item anterior passando como argumento o novo objeto


const pessoa0 = {
   nome: "Joana", 
   apelidos: ["Jo", "Jojo", "Moranguinho"]
}

function imprimirMensagem(pessoa0) {
    const mensagemDaPessoa = pessoa0

   return mensagemDaPessoa
}
    const novapessoa = {
    ...pessoa0,
    apelidos: ["Ju", "Juju", "Juanão"]


}
 const resposta = imprimirMensagem(novapessoa)
 console.log(`Eu sou ${resposta.nome}, mas pode me chamar de: ${resposta.apelidos}`)

//2. Resolva os passos a seguir:
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

    const pessoa1 = {
        nome: "Joana",
        idade: 28, 
    	profissao:"estudante",
    }
    const pessoa2 = {
        nome: "Anderson",
        idade: 33,
        profissao: "Operador de empilhadeiras",
    }

    function imprimirPessoas(pessoa1, pessoa2) {
        const imprimirPessoa1 = []
        imprimirPessoa1[0] = pessoa1.nome
        imprimirPessoa1[1] = pessoa1.nome.length
        imprimirPessoa1[2] = pessoa1.idade
        imprimirPessoa1[3] = pessoa1.profissao
        imprimirPessoa1[4] = pessoa1.profissao.length

        const imprimirPessoa2 = []
        imprimirPessoa2[0] = pessoa2.nome
        imprimirPessoa2[1] = pessoa2.nome.length
        imprimirPessoa2[2] = pessoa2.idade
        imprimirPessoa2[3] = pessoa2.profissao
        imprimirPessoa2[4] = pessoa2.profissao.length

        
        console.log(imprimirPessoa1)

        console.log(imprimirPessoa2)
    }

     imprimirPessoas(pessoa1, pessoa2)
      
     

    // 3.Resolva os passos a seguir: 
    //a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

     let carrinho = []

    //b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
    // // nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

     const frutas1 = {
      nome: "mamão",
      disponibilidade: true,
    }
     const frutas2 = {
         nome: "pera",
         disponibilidade: true,
     }
     const frutas3 = {
         nome: "banana",
         disponibilidade: true,
     }
    // //c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de
    // // `carrinho`. Invoque essa função passando os três objetos criados

    function minhasFrutas(frutas1, frutas2, frutas3) {
        carrinho[0] = frutas1
        carrinho[1] = frutas2
        carrinho[2] = frutas3
    
    }
     minhasFrutas(frutas1, frutas2, frutas3)

    // //d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

    console.log(carrinho) 
