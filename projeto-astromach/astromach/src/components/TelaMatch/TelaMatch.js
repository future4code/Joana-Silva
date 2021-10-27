import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import Swal from "sweetalert2";

const TelaMatch = (props) => {
  const [listaMatch, setListaMatch] = useState([]);

  const pegarMatch = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((response) => {
        setListaMatch(response.data.matches);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  useEffect(() => {
    pegarMatch();
  }, []);

  const limparMatch = () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (window.confirm("Deseja apagar a lista de Match?")) {
      axios
        .put(`${BASE_URL}/clear`, header)
        .then((response) => {
          Swal.fire("", "A Lista foi apagada com sucesso!", "success");
          setListaMatch(response.data.message);
        })
        .catch((erro) => {
          Swal.fire("", "Ops! Algo deu Errado :(", "error");
        });
    }
  };

  return (
    <div>
      <h2>Lista De Match</h2>
      {listaMatch.map((match) => {
        return (
          <div>
            <img src={match.photo}></img>
            <p> {match.name}</p>
          </div>
        );
      })}

      <button onClick={limparMatch}> Limpar match</button>

      <button onClick={props.irParaTelaPrincipal}>Ir para Tela Inicial </button>
    </div>
  );
};

export default TelaMatch;
