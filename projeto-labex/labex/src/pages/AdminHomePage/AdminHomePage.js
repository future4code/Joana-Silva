import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import useRequestData from "../../Hooks/UseRequestData";
import { MainContainer, CardContainer } from "./AdminHomeStyled";





const AdminHomePage = () => {

  const [listTripsData, setListTripsData] = useRequestData(`${BASE_URL}/trips`)

  const history = useHistory();

  const goToCreatTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goToHomePage = () => {
    history.push("/")
  }

  const goTripDetails = (tripId) => {
    const tripIdentification = tripId;
    history.push(`/admin/trips/${tripIdentification}`);

  };

  const logout = () => {
    localStorage.removeItem("token")
    history.push("/login");
  }

  const deleteTrip = (trip) => {

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      },
    };

    if (window.confirm("Deseja deletar essa viagem?")) {
      axios.delete(`${BASE_URL}/trips/${trip.id}`, headers)

        .then((response) => {
          alert(`Você deletou a viagem ${trip.name} que ia em direção ao planeta ${trip.planet}!`);
          history.push("/admin/trips/list");
          setListTripsData()


        })
        .catch((error) => {
          alert(error);
          history.push("/admin/trips/list");

        })
    }
    else {
      history.push("/admin/trips/list");
    }
  };

  return (
    <MainContainer>
      {listTripsData?.trips.map((trip) => {
        return (
          <CardContainer onClick={() => goTripDetails(trip.id)} key={trip.id}>
            <div> {trip.name} </div>
            <div onClick={(e) => {
              e.stopPropagation();
              deleteTrip(trip)
            }}> <div> <img
              src="/img/download.png" width=" 8% " altura=" 8% " />
              </div>
            </div>

          </CardContainer>

        )
      })}

      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToCreatTripPage}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
    </MainContainer>
  );
}

export default AdminHomePage;