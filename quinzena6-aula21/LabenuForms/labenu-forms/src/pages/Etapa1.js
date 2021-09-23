import React from "react";

class Etapa1 extends React.Component {

    onChangeIput = (e) => {
        this.setState({ e: e.target.value })
    }

    render() {


        return (

            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <div>
                    <p>1. Qual o seu nomme?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

                <div>
                    <p>2. Qual a sua idade?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

                <div>
                    <p>3. Qual o seu email?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>

                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    />
                </div>


            </div>
        )
    }
}

export default Etapa1;
