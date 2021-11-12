import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import useRequestData from "../../Hooks/useRequestData";

const ListTripsPage = () => {
  const [listTrips, setListTrips, isCarregando, erro] = useRequestData(
    `${BASE_URL}/trips`
  );

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  return (
    <div>
      {listTrips?.map((trips) => {
        return <p key={trips.id}>{trips.name}</p>;
      })}
      <h1>Lista De Viagens</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Increva-se</button>
    </div>
  );
};

export default ListTripsPage;
