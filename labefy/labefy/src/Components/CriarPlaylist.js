import React from "react"
import axios from "axios"

const headers = {
    headers: {
      Authorization: "Joana-Dias-banu"
    }
  }



 class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: ""
    }

    criaPlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value})
    }


    criarPlaylist = () => {
        const body = {
            name: this.state.nomePlaylist,
            
          };
      
          axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, headers)
            .then((resposta) => {
              console.log(resposta)
              this.setState({ nomePlaylist: "" })
              alert("A Playlist foi criada com sucesso!")
             
            })
            .catch((erro) => {
                alert("Ops! Algo deu Errado :(")
                console.log(erro);
              })
    }

              render() {

                return(
                <div>
                    <button onClick={this.props.irParaLista}>Ir para Lista de Playlist</button>
                    <h2>Criar PlayList</h2>
                    <input
                        placeholder={"Nome da Playlist"}
                        value={this.state.nomePlaylist}
                        onChange={this.criaPlaylist}
                    />
                    <button onClick={this.criarPlaylist}>Criar Playlist</button>
                </div>
            )
                }

}
    


    

export default CriarPlaylist