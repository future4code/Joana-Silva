import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { countries } from "../../Constants/Countries";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url"
import { useState, useEffect } from "react"

const ApplicationFormPage = () => {

  const history = useHistory();

  const [listTrips, setListTrips] = useState([]);
 


  const getTrips = () => {

    axios.get(`${BASE_URL}/trips`)
      .then((response) => {   
        setListTrips(response.data.trips)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    getTrips()
  }, []);


  const { form, onChange, cleanFields } = useForm({ 
    tripId:"",
    name: "", 
    age: "", 
    applicationText: "", 
    profession: "",
    country: ""  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
  };
  axios.post(`${BASE_URL}/trips/${form.tripId}/apply`, body)
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
      <h1>Inscreva-se para uma Viagem</h1>
      <div>
      <form onSubmit={applyToTrip}>
      <select
                value={form.tripId}
                required
                name={"tripId"}
                onChange={onChange}
            >
            <option value={""}>Selecione a viagem:</option>
                {listTrips.map((trip) => {
                    return (
                        <option value={trip.id} key={trip.id}>
                            {trip.name} {trip.planet}
            </option>
                    );
                })}
            </select>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={onChange}
          placeholder={"Idade"}
          required
          type={"number"}
          min={18}
        />
        <input
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          placeholder={"Texto de Candidatura"}
          required
          pattern={"^.{30,}"}
          title={"Sua texto deve ter no mínimo 30 caracteres"}
        />
        <input
          name="profession"
          value={form.profession}
          onChange={onChange}
          placeholder={"Profissão"}
          required
          pattern={"^.{6,}"}
          title={"Sua profissão deve ter no mínimo 6 caracteres"}
        />
        <select
                value={form.country}
                required
                name={"country"}
                onChange={onChange}
            >
            <option value={""}>Selecione seu país:</option>
                {countries.map((country) => {
                    return (
                        <option value={country} key={country}>
                            {country}
            </option>
                    );
                })}
            </select>
            <button>Enviar</button>    
        
      </form>
      </div>
     
      <button onClick={goBack}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
};

export default ApplicationFormPage;
