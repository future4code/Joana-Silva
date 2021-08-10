

    console.log("Bem vindo(a) ao jogo de Blackjack!")
    
    let cartaUsuario1 = comprarCarta();
    let cartaUsuario2 = comprarCarta();
    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();

    let usuario = cartaUsuario1.valor + cartaUsuario2.valor;
    let computador = cartaComputador1.valor + cartaComputador2.valor;

    let respostaUsuario = confirm("Quer Iniciar uma nova rodada?")
  
     while (respostaUsuario === true) {

     if(usuario === computador) {
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação: ${usuario}`);
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação: ${computador}`);
       console.log("Empate!")
      
    } else if (usuario > computador) {
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação: ${usuario}`);
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação: ${computador}`);
      console.log("O usuário Ganhou!")
   
    }else if (computador > usuario) {
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação: ${usuario}`);
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação: ${computador}`);
      console.log("O Computador Ganhou!")
    }

    break

    }

    while (respostaUsuario === false) {
      console.log("O jogo acabou!")
      break
   }