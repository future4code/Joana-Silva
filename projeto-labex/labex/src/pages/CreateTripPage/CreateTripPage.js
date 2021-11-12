import { useHistory } from "react-router-dom";

const CreatTripPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
};

export default CreatTripPage;
