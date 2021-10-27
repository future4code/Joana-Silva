import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import Swal from "sweetalert2";

const TelaInicial = (props) => {
  const [mostrarPerfil, setMostrarPerfil] = useState([]);

  const pegarPerfil = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((response) => {
        setMostrarPerfil(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarPerfil();
  }, []);

  const likePerson = () => {
    const body = {
      id: mostrarPerfil.id,
      choice: true,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) {
          Swal.fire(`${mostrarPerfil.name}`, "ebaa deu match :)", "success");
        }
        pegarPerfil();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deslikePerson = () => {
    const body = {
      id: mostrarPerfil.id,
      choice: false,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        pegarPerfil();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>AstroMatch</h2>
      <button onClick={props.irParaTelaMatch}>Ir para Tela Match</button>
      <span> {mostrarPerfil.name} </span>
      <img src={mostrarPerfil.photo} alt={mostrarPerfil.name} />
      <span> {mostrarPerfil.bio} </span>
      <span> {mostrarPerfil.age} </span>
      <button onClick={likePerson}>Like</button>
      <button onClick={deslikePerson}>Deslike</button>
    </div>
  );
};

export default TelaInicial;
