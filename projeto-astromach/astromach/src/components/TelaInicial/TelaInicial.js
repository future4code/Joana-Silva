import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BASE_URL } from "../../constants/urls";

const TelaInicial = (props) => {
  const [profileList, setProfileList] = useState([]);

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joana/person`
      )
      .then((response) => {
        setProfileList(response.data.profile);
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  useEffect(() => {
    document.title = "Astromatch";
    getProfile();
  }, []);

  const choosePersonLike = () => {
    const body = {
      id: profileList.id,
      choice: true,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joana/choose-person`,
        body
      )
      .then((response) => {
        if (response.data.isMatch) {
          alert(`${profileList.name} deu match`);
        }
        getProfile();
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const choosePersonDeslike = () => {
    const body = {
      id: profileList.id,
      choice: false,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:joana/choose-person`,
        body
      )
      .then((response) => {
        getProfile();
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  return (
    <div>
      <h2>astromatch</h2>
      <button onClick={props.irParaTelaMatch}>trocar página</button>
      <p>{profileList.name}</p>
      <img src={profileList.photo} />
      <p>{profileList.bio}</p>
      <p>{profileList.age}</p>
      <button onClick={choosePersonDeslike}>Deslike</button>
      <button onClick={choosePersonLike}>Like</button>
    </div>
  );
};

export default TelaInicial;

// const TelaInicial = (props) => {
//   const [mostrarPerfil, setMostrarPerfil] = useState([]);

//   const getProfile = () => {
//     axios
//       .get(`${BASE_URL}/person`)
//       .then((response) => {
//         setMostrarPerfil(response.data.profile);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     document.title = "Astromatch";
//     getProfile();
//   }, []);

//   const likePerson = () => {
//     const body = {
//       id: mostrarPerfil.id,
//       choice: true,
//     };
//     axios
//       .post(`${BASE_URL}/choose-person`, body)
//       .then((response) => {
//         if (response.data.isMatch) {
//           alert("Oi");
//         }
//         getProfile();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const deslikePerson = () => {
//     const body = {
//       id: mostrarPerfil.id,
//       choice: false,
//     };
//     axios
//       .post(`${BASE_URL}/choose-person`, body)
//       .then((response) => {
//         getProfile();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h2>AstroMatch</h2>
//       <button onClick={props.irParaTelaMatch}>Ir para Tela Match</button>

//       <p> {mostrarPerfil.name} </p>
//       <img src={mostrarPerfil.photo} />
//       <span> {mostrarPerfil.bio} </span>
//       <span> {mostrarPerfil.age} </span>

//       <button onClick={likePerson}>Like</button>
//       <button onClick={deslikePerson}>Deslike</button>
//     </div>
//   );
// };

// export default TelaInicial;
