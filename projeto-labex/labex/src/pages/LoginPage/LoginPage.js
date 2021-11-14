import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import axios from "axios"
import { BASE_URL } from "../../Constants/Url";


const LoginPage = () => {
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });

  const submitLogin = (event) => {
    event.preventDefault();
    const body = {

      email: form.email,
      password: form.password,

    };
    axios.post(`${BASE_URL}/login`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        history.push("/admin/trips/list")

      })
      .catch((error) => {
        alert("Ops! Usuário ou senha incorretos")
      })

    cleanFields();

  };

  const goToHomePage = () => {
    history.push("/")
  }


  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitLogin}>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
          type="email"

        />
        <input
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          required
          type="password"
          pattern={"^.{3,}"}
          title={"A senha deve ter no mínimo 3 números"}
        />
        <button>Entrar</button>
      </form>


      <button onClick={goToHomePage}>Voltar</button>


    </div>
  );
};

export default LoginPage;
