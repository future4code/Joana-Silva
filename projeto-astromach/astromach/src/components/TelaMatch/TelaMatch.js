import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BASE_URL } from "../../constants/urls";

const TelaMatch = (props) => {
  const [listMatch, setListMatch] = useState([]);

  const getMatch = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joana/matches`
      )
      .then((response) => {
        setListMatch(response.data.matches);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  useEffect =
    (() => {
      getMatch();
    },
    []);

  return (
    <div>
      {listMatch.map((pokemon) => {
        return (
          <div>
            <img src={listMatch.photo}></img>
            <p> {listMatch.name}</p>
          </div>
        );
      })}

      <button onClick={props.irParaTelaPrincipal}>Ir para Tela Inicial </button>
    </div>
  );
};

export default TelaMatch;
