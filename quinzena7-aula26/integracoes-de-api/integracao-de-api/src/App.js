import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagina from './components/Pagina'

const Body = styled.div`
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`
const ButtonFooter = styled.div`
margin-top:20px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`

const Main = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`
const HeaderPagina = styled.div`
background-color:orange;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height:60px;
padding: 0px 20px 0px 20px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 

`
const EstilizarButton = styled.button`
border: none;
border-start-end-radius: 5px;
border-end-start-radius: 5px;
height:30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 

:hover {
  transition: all 0.5s;
  color: white;
  background-color: black
}
`

const headers = {
  headers: {
    Authorization: "Joana-Dias-banu"
  }
}

class App extends React.Component {
  state = {
    pegarUsuario: [],
    usuario: "",
    email: "",
    paginas: false
  }

  componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers)
      .then((respostas) => {
        this.setState({ pegarUsuario: respostas.data });
      })
      .catch((erros) => console.log(erros));
  }

  criarUsuario = () => {
    const body = {
      name: this.state.usuario,
      email: this.state.email
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
      .then((resposta) => {
        console.log(resposta)
        this.setState({ usuario: "" })
        this.setState({ email: "" })
        alert("O usuário foi criado com sucesso!")
        this.pegarUsuario();
      })

      .catch((erro) => {
        alert("Ops! Algo deu Errado :(")
        console.log(erro);
      })
  };

  deleteUsuario = (id) => {
    if(window.confirm("Deseja deletar esse usuário?")){
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((respostas) => {
        console.log(respostas)
        alert("O usuário foi capagado com sucesso!")
        this.pegarUsuario();
      })
      .catch((erros) => {
        alert("Ops! Algo deu Errado :(")
        console.log(erros);
      })
    }
  }

  onChangeUsuario = (e) => {
    this.setState({ usuario: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  renderizaPagina = () => {
    this.setState({ paginas: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ paginas: false });
  };

  render() {

    if (this.state.paginas) {
      return (
        <Pagina
          pegarUsuario={this.state.pegarUsuario}
          renderizaPaginaFalse={this.renderizaPaginaFalse}
          deleteUsuario={this.deleteUsuario}
        />
      );
    }

    return (
      <Body>
        <HeaderPagina>
          <h1>Labenusers</h1>
          <EstilizarButton onClick={this.renderizaPagina}>Trocar de Página</EstilizarButton>
        </HeaderPagina>

        <Main>
         <h1>Cadastro</h1>
         <input
            placeholder="Nome"
            value={this.state.usuario}
            onChange={this.onChangeUsuario}
          />
          <input
            placeholder="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </Main>
        <ButtonFooter>
        <EstilizarButton onClick={this.criarUsuario}>Criar</EstilizarButton>
        </ButtonFooter>


      </Body>
    )
  }

}






export default App;
