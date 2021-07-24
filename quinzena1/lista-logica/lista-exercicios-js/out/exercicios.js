// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt("Digite a altura do retangulo!")
  const largura = prompt("Digite a largura do retangulo!")

  console.log(altura * largura)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Digite o ano atual!")
  const anoNascimento = prompt("Digite o ano de que você nasceu")

  console.log(anoAtual - anoNascimento)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt("Digite seu peso em kg!")
  const altura = prompt("Digite sua altura em metros!")

  console.log(peso / (altura * altura))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Digite seu nome!")
  const idade = prompt("Digite sua idade!")
  const email = prompt("Digite seu email!")

  console.log("Meu nome é " + nome + ", " + "tenho " + idade + " anos, e o meu email é " + email + ".")

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let coresFavoritas = []
  coresFavoritas[0] = prompt("Digite sua primeira cor favorita!")
  coresFavoritas[1] = prompt("Digite sua segunda cor favorita!")
  coresFavoritas[2] = prompt("Digite sua terceira cor favorita!")

  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Digite uma palavra com letra minuscula!")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoTotal = prompt("Digite o valor do custo total do espetáculo!")
  const valorIngresso = prompt("Digite o valor de cada ingresso!")

  console.log(custoTotal / valorIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt("Digite uma palavra!")
  const string2 = prompt("Digite outra palavra!")

  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const digitePalavra1 = prompt("Digite uma palavra!")
  const digitePalavra2  = prompt("Digite outra palavra!")

  console.log(digitePalavra1.toLowerCase() === digitePalavra2.toLowerCase())


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui 
  let anoQueEsta = Number(prompt("Digite o ano em que estamos!"))
  let anoQueNasceu = Number(prompt("Digite o ano do seu nasciment!"))
  let anoRg = Number(prompt("Digite o ano em tirou sua identidade!"))

  let suaIdade = anoQueEsta - anoQueNasceu
  let emissaoRg = anoQueEsta - anoRg

  let renovacao20 = suaIdade <= 20 && emissaoRg / 5 >= 1
  let renovacao20e50 = suaIdade > 20 && suaIdade <= 50 && emissaoRg / 10 >= 1
  let renovacao50mais = suaIdade > 50 && emissaoRg / 15 >= 1

  let renovacao = renovacao20 || renovacao20e50 || renovacao50mais

  console.log(renovacao)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let umAnoQualquer = Number(prompt("Digite um ano qualquer!"))

  let multiplo400 = umAnoQualquer % 400 === 0
  let multiplo100 = umAnoQualquer % 100 !== 0
  let multiplo4e100 = umAnoQualquer % 4 === 0 && multiplo100

  let anoBissexto = multiplo400 || multiplo4e100 

  console.log(anoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let condicaoEstudante1 = prompt("Condição para ser estudante Labenu: Você tem mais de 18 anos?")
  let condicaoEstudante2 = prompt("Você possui ensino médio completo?")
  let condicaoEstudante3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  let inscricaoValida = condicaoEstudante1 === "sim" && condicaoEstudante2 === "sim" && condicaoEstudante3 === "sim" 

  console.log(inscricaoValida)
}