import React from "react";

class Etapa3 extends React.Component {

    onChangeIput = (e) => {
        this.setState({ e: e.target.value })
    }

    render() {


        return (

            <div>

                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO SUPERIOR</h1>

                <div>
                    <p>7. Porque você não terminou um curso de graduação?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

                <div>
                    <p>8. Você fez algum curso complementar?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

            </div>
        )
    }
}

export default Etapa3
