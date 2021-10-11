import React from 'react'
import styled from 'styled-components'


const Body = styled.div`
text-align: center
`




class Pagina extends React.Component {

    render() {
        const listaUsuario = this.props.pegarUsuario.map((pegarUsuarios) => {
            return <div><li key={pegarUsuarios.id}>{pegarUsuarios.name}</li>
                <button onClick={() => this.props.deleteUsuario(pegarUsuarios.id)}>Deletar</button>
            </div>
        });


        return (
            <Body>
                <h1>Labenusers</h1>
                <button onClick={this.props.renderizaPaginaFalse}>Trocar de Página</button>

                <h1>Lista de Usuários</h1>
                {listaUsuario}

            </Body>
        )
    }



}










export default Pagina;