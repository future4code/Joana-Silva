import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { planetts } from "../../Constants/Planet";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";


const CreatTripPage = () => {
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const creatTrips = (event) => {

    event.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    };

    axios.post(`${BASE_URL}/trips`, body, headers)
      .then((response) => {
        alert("Aplicação bem sucedida!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      })

    cleanFields();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1> Criar Viagem</h1>
      <form onSubmit={creatTrips}>

        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required

        />

        <select
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder={"Escolha um Planeta"}
          required
        >
          <option value={""}>Escolha um Planeta</option>
          {planetts.map((planets) => {
            return (
              <option value={planets} key={planets}>
                {planets}
              </option>
            );
          })}
        </select>

        <input
          name="date"
          value={form.date}
          onChange={onChange}
          placeholder={"Data"}
          required
          type={"date"}

        />
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={"Descrição"}
          required
          pattern={"^.{30,}"}
          title={"Sua texto deve ter no mínimo 10 caracteres"}
        />
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          placeholder={"Duração em dias"}
          required
          type={"number"}
          min={50}

        />
        <button>Criar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
};

export default CreatTripPage;
