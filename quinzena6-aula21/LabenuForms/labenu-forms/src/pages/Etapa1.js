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
                    {/* <input
                        value={this.props.state}
                        onChange={this.onChangeIput}
                    /> */}

                    <select>
                        <option value="none"></option>
                        <option value="sup-incompleto" selected>Ensino Superior Incompleto</option>
                        <option value="sup-comleto">Ensino Superior completo</option>
                        <option value="med-incompleto">Ensino Médio incompleto</option>
                        <option value="med-completo">Ensino Médio completo</option>


                    </select>
                </div>


            </div>
        )
    }
}

export default Etapa1;
