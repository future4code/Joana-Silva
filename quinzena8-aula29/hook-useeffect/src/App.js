import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokecard from "./components/Pokecard";

const App = (props) => {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokename] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setPokename(event.target.value);
  };

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <Pokecard pokeName={pokeName} />}
    </div>
  );
};

export default App;
