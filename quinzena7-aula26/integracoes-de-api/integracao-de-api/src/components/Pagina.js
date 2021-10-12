import React from 'react'
import styled from 'styled-components'


const Body = styled.div`
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 

`
const DivUsuario = styled.div`
border: 1px solid black;
border-start-end-radius: 5px;
border-end-start-radius: 5px;
display: flex;
justify-content:space-between;
text-align: center;
align-items:center;
margin:10px;
padding:10px;
width: 300px;
margin-left:525px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
`
const HeaderPagina = styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
background-color:orange;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height:60px;
padding: 0px 20px 0px 20px;
`
const EstilizarButton = styled.button`
border: none;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
border-start-end-radius: 5px;
border-end-start-radius: 5px;
height:30px;

:hover {
  transition: all 0.5s;
  color: white;
  background-color: black
}
`

class Pagina extends React.Component {

    render() {
        const listaUsuario = this.props.pegarUsuario.map((pegarUsuarios) => {
            return <DivUsuario><li key={pegarUsuarios.id}>{pegarUsuarios.name}</li>
                <EstilizarButton onClick={() => this.props.deleteUsuario(pegarUsuarios.id)}>x</EstilizarButton>
            </DivUsuario>
        });


        return (
            <Body>
                <HeaderPagina>
                <h1>Labenusers</h1>
                <EstilizarButton onClick={this.props.renderizaPaginaFalse}>Trocar de Página</EstilizarButton>
                </HeaderPagina>
                

                <h1>Lista de Usuários</h1>
                {listaUsuario}

            </Body>
        )
    }



}










export default Pagina;