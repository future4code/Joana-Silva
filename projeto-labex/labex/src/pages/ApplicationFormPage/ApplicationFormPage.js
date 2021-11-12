import { useHistory } from "react-router-dom";

const ApplicationFormPages = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Inscreva-se para uma Viagem</h1>
      <button onClick={goBack}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
};

export default ApplicationFormPages;
