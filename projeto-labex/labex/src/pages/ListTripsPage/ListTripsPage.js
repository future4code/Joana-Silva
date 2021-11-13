import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import axios from "axios";
import { useState, useEffect } from "react";


const ListTripsPage = () => {
  const [listTrips, setListTrips] = useState([]);
 

  useEffect(() => {
    getTrips()
  }, []);

  const history = useHistory()

  const getTrips = () => {

    axios.get(`${BASE_URL}/trips`)
      .then((response) => {
        console.log(response.data.trips)
        setListTrips(response.data.trips)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }


  const goBack = () => {
    history.goBack()
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

 
  return (
    <div>

      <h1>Lista De Viagens</h1>
      {listTrips?.map((trips) => {
        return (
          <div>
            <p key={trips.id}>{trips.name}</p>
            <p> {trips.description} </p>
            <p> {trips.planet} </p>
            <p>{trips.durationInDays}</p>
            <p>{trips.date}</p>
          </div>
         )
      })}
      
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increva-se</button>
    </div>
  )
    
}

export default ListTripsPage
