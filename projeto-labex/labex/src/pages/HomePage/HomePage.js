import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToLoginPage = () => {
    history.push("/login");
    /* const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/login");
        }
        else {
            history.push("/admin/trips/list");
        };
    };
}*/
  };

  return (
    <div>
      <h1>LabeX</h1>
      <button onClick={goToListTripsPage}>Ver Viagens</button>
      <button onClick={goToLoginPage}>Área de Admin</button>
    </div>
  );
};

export default HomePage;
