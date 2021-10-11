import React from "react";
import styled from "styled-components"
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Final from "./pages/Final";

const ContainerPai = styled.div`
  text-align:center;
`
const BotaoPrincipal = styled.button`
 margin-top: 20px;
`


class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />

      default:
        return 'Erro! Página não encontrada!'

    }

  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {


    return (

      <ContainerPai>
        {this.renderizaEtapa()}

        <div>
          {this.state.etapa !== 4 && (
            <BotaoPrincipal onClick={this.irParaProximaEtapa}>Próxima Etapa</BotaoPrincipal>
          )}
        </div>


      </ContainerPai>
    )
  }
}


export default App;
