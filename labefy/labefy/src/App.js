import React from "react"
import styled from 'styled-components' 
import  CriarPlaylist from "./Components/CriarPlaylist"
import ListaPlaylist from "./Components/ListaPlaylist"

class App extends React.Component {

  state = {
    telaPrincipal: "cadastrar"
  }

  escolheTela = () => {
    switch (this.state.telaPrincipal){
      case "cadastrar":
        return <CriarPlaylist irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaPlaylist irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaPrincipal: "cadastrar"})
  }

  irParaLista = () => {
    this.setState({telaPrincipal: "lista"})
  }

  render(){ 
    
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }

}


export default App;
