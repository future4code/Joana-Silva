// EXERCÍCIO 01



function inverteArray(array) {
  let inverterArray = []
for (let i = array.length -1; i >= 0; i--){
 inverterArray.push(array[i])

 
}
return inverterArray
} 

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosElevadoaDois = []
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosElevadoaDois.push(array[i]**2) 
    }
  } 
   return numerosElevadoaDois
  }
  
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let retornaNumeroPar = []
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      retornaNumeroPar.push(array[i]) 
    }
  }
    return retornaNumeroPar
}
 

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
   let maiorNumero = 0
  for (let i = 0; i <= array.length; i++) {
    if(array[i] > maiorNumero) {
    maiorNumero = array[i]
    }
  }
  return maiorNumero
}


// EXERCÍCIO 05

function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = []

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
 
  let trueOrFalse1 = booleano1 && booleano2 && !booleano4
  let trueOrFalse2 = (booleano1 && booleano2) || !booleano3
  let trueOrFalse3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  let trueOrFalse4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  let trueOrFalse5 = !(booleano2 && booleano3) || !(booleano1 && booleano3)

  respostas.push(trueOrFalse1, trueOrFalse2, trueOrFalse3, trueOrFalse4, trueOrFalse5)
  return respostas
} 

// EXERCÍCIO 07

function retornaNNumerosPares(n) {
  let retornarNNumeros = []
  for (let i = 0; retornarNNumeros.length < n; i++) {
    if (i % 2 === 0) {
       retornarNNumeros.push(i)
    }
  
  }
    return retornarNNumeros
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'
  } else if ( a !== b && b !== c) {
   return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
const filmeFavorito = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`
  
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
   largura: lado1,
   altura: lado2,
   perimetro: 2 * (lado1 + lado2),
   area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
