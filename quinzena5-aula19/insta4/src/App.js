import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  height: 200px;
  width: 280px;
  margin-bottom: 20px;
  margin-top: 20px;
`

const FormInput = styled.input`
  margin: 10px;
  
`
const FormBotton = styled.button`
border-radius: 10px;
border-end-start-radius: 10px;
background-color: lightcyan
`

class App extends React.Component {

  state={
    usuarios: 
    [
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
    
      { nomeUsuario:"Joana",
      fotoUsuario:"https://picsum.photos/50/52",
      fotoPost:"https://picsum.photos/200/152"
      
      },
      
      { nomeUsuario:'Hellen',
      fotoUsuario: "https://picsum.photos/50/51",
      fotoPost: "https://picsum.photos/200/151"
      
      }
    
      ],

      nomeInputUsuraio: "",
      fotoInputUsuario: "",
      fotoInputPost: ""
    
}
  
   adicionaPost = () => {
     this.setState({
      nomeInputUsuraio: "",
      fotoInputUsuario: "",
      fotoInputPost: ""
     })

     const novaUsuario ={
       nomeUsuario: this.state.nomeInputUsuraio,
       fotoUsuario: this.state.fotoInputUsuario,
       fotoPost: this.state.fotoInputPost
     }

     const novoUsuario = [...this.state.usuarios, novaUsuario]

     this.setState({usuarios: novoUsuario})
   }

   onChangeInputUsuario = (event) => {
    
    this.setState({ nomeInputUsuraio: event.target.value });
  };
  onChangeInputFoto = (event) => {
  
    this.setState({ fotoInputUsuario: event.target.value });
  };
  onChangeInputPost = (event) => {
   
    this.setState({ fotoInputPost: event.target.value });
  };

  render() {

    const novoArrayDeUsuarios = this.state.usuarios.map((usuario) => {

    return (
      <Post
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
      />
    )
    })

    return (<MainContainer>
      <FormContainer>
      
      <FormInput
            value={this.state.nomeInputUsuraio}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome Usuario"}
          />

      <FormInput
            value={this.state.fotoInputUsuario}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuario"}
          />

      <FormInput
            value={this.state.fotoInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Post"}
          />
          <FormBotton onClick={this.adicionaPost}>Adicionar Post</FormBotton>

      </FormContainer>

       {novoArrayDeUsuarios}

           </MainContainer>
          )

  }

}

  
  


export default App;
