import React from 'react'
import axios from "axios"

const headers = {
    headers: {
      Authorization: "Joana-Dias-banu"
    }
  }

 class ListaPlaylist extends React.Component {
    state = {
        playlist: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", headers)
        .then((respostas) => {
        this.setState({ playlist: respostas.data })
        })
        .catch((erros) => console.log(erros));
    }

    deletarUsuario = (id) => {
        if(window.confirm("Deseja deletar essa Playlist?")){
        axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
      .then((respostas) => {
        console.log(respostas)
        alert("A Playlist foi apagada com sucesso!")
        this.pegarPlaylist();
      })
      .catch((erros) => {
        alert("Ops! Algo deu Errado :(")
        console.log(erros);
      })
    }
    }

    render() {
            const retornaLista = this.state.playlist.map((playlists) => {
                return ( <div><li key={playlists.id}>{playlists.name}</li>
                    <button onClick={() => this.deletarUsuario(playlists.id)}>Deletar</button>
                </div>
                )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Playlist </button>
                <h2>Lista de Playlist</h2>
                {retornaLista}
            </div>
        )
    }
}

export default ListaPlaylist
