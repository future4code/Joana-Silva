import  React from "react"
import axios from "axios"

const headers = {
    headers: {
      Authorization: "Joana-Dias-banu"
    }
  }



class DetalhesPlaylist extends React.Component {

    state = {
        nome: "",
        artista:"",
        link:"",
        listaMusicas:[]
    }

    onchangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onchangeArtista = (event) => {
        this.setState({artista: event.target.value})
    }

    onchangeLink = (event) => {
        this.setState({link: event.target.value})
    }
    

    adicionaMusica = (id) => {
        const body = {
            name: this.state.nome,
            artist: this.state.artista,
            url: this.state.link
            
          };
      
          axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, headers)
            .then((resposta) => {
              console.log(resposta)
              this.setState({ nome: "", artista:"", link:"" })
              this.props.pegarPlaylist(id)
              alert("A Música foi adicionada com sucesso!")
             
            })
            .catch((erro) => {
                alert("Ops! Algo deu Errado :(")
                console.log(erro);
              })
    }

    componentDidMount() {
        this.pegarMusicaPlaylist()
    }

    pegarMusicaPlaylist = (id) => {
    
        axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, headers)
      .then((respostas) => {
        this.setState({listaMusicas: respostas.data.result.list })
        console.log("Atenção", respostas.data)
        })
        .catch((erros) => console.log(erros));
    }



    render() {

        const retornaMusica = this.state.listaMusicas.map((music) => {
            return ( <div><li key={music.id}>{music.name}{music.artist}{music.url}</li>
            </div>
            )
    })

        return (
            <div>
            <button onClick={this.props.renderizaPaginaVoltar}>
                Voltar Para Lista de Playlist
            </button>

            <h2>Adicionar Música</h2>
                    <input
                        placeholder={"Nome da música"}
                        value={this.state.nome}
                        onChange={this.onchangeNome}
                    />
                    <input
                        placeholder={"Nome do artista"}
                        value={this.state.artista}
                        onChange={this.onchangeArtista}
                    />
                    <input
                        placeholder={"Link da Música"}
                        value={this.state.link}
                        onChange={this.onchangeLink}
                    />
                    <button onClick={this.adicionaMusica()}>Criar Playlist</button>

                    {retornaMusica}
            </div>

        )
    }

}

export default DetalhesPlaylist