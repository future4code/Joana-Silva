import React from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import useRequestData from "../../Hooks/UseRequestData";
import { MainCard, Card } from "./ListTripsStyled";


const ListTripsPage = () => {

  const [listTripsData] = useRequestData(`${BASE_URL}/trips`)

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }



  return (

    <MainCard>
      <h1>Lista De Viagens</h1>
      {listTripsData?.trips.map((trip) => {
        return (
          <Card>
            <p key={trip.id}> <strong> Nome:</strong>{trip.name}</p>
            <p> <strong>Descrição: </strong> {trip.description} </p>
            <p> <strong> Planeta: </strong> {trip.planet} </p>
            <p> <strong> DUração em dias:</strong> {trip.durationInDays}</p>
            <p> <strong> Data:</strong> {trip.date}</p>
          </Card>
        )
      })}
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increva-se</button>
    </MainCard>
  )

}

export default ListTripsPage
