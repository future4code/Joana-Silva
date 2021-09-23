import React from "react";

class Etapa2 extends React.Component {

    onChangeIput = (e) => {
        this.setState({ e: e.target.value })
    }

    render() {


        return (

            <div>

                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <div>
                    <p>5. Qual o curso?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

                <div>
                    <p>6. Qual a unidade se ensino?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

            </div>
        )
    }
}

export default Etapa2;