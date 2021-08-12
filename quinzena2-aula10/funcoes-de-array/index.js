// 1.  Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  //a) O que vai ser impresso no console?
  //nome: "Amanda Rangel", apelido: "Mandi" 
  //nome: "Laís Petra", apelido: "Laura" 
  //nome: "Letícia Chijo", apelido: "Chijo"
  // Irá imprimir o objeto usuarios 3 vezes na mesma ordem.

  //2. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })

    console.log(novoArrayB)

    //a) O que vai ser impresso no console?
    // "Amanada Rangel" "Laís Petra" "Letícia Chijo"

    //3. Leia o código abaixo

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  //a) O que vai ser impresso no console?
  //nome: "Amanda Rangel", apelido: "Mandi"
  //nome: "Laís Petra", apelido: "Laura"

  //1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
  // realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]

   //a) Crie um novo array que contenha apenas o nome dos doguinhos

   const nomePets = pets.map((item, index, array ) => {
       return item.nome
   }) 
    console.log(nomePets)

    //b) Crie um novo array apenas com os cachorros salsicha

      const arrayDePetsSalsicha = pets.filter((item, index, array) => {
          return item.raca === "Salsicha"
      })
       console.log(arrayDePetsSalsicha)

    //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
    // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

    const mensagemDePromocao = pets.filter((item, index, array) => {
       if (item.raca === "Poodle")
       return item.nome
    })
     function imprimeMensagem (pets){
     return  `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`

     }
     const mensagem = mensagemDePromocao.map(imprimeMensagem)
     console.log(mensagem)

     
    