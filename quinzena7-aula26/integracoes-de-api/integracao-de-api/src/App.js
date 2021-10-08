import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagina from './components/Pagina'

const Body = styled.div`
text-align: center
`
const ButtonFooter = styled.div`
margin-top:20px
`

const Main = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px
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
        <div>
          <h1>Labenusers</h1>
          <button onClick={this.renderizaPagina}>Trocar de Página</button>
        </div>

        <Main>
         <h2>Cadastro</h2>
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
        <button onClick={this.criarUsuario}>Criar</button>
        </ButtonFooter>


      </Body>
    )
  }

}






export default App;
