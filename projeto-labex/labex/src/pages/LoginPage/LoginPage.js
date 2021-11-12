import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  return (
    <div>
      <h1>Login</h1>

      <form></form>

      <button onClick={goBack}>Voltar</button>
      <button onClick={goToAdminHomePage}>entrar</button>
    </div>
  );
};

export default LoginPage;
