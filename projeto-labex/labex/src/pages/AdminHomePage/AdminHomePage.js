import { useHistory } from "react-router-dom";

const AdminHomePage = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToCreatTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreatTripPage}>Criar Viagem</button>
      <button onClick={goToLoginPage}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
