import React, { useState, useEffect } from "react";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaMatch from "./components/TelaMatch/TelaMatch";

const App = (props) => {
  const [telaPrincipal, setTelaPrincipal] = useState("profile");

  const escolheTela = () => {
    switch (telaPrincipal) {
      case "profile":
        return <TelaInicial irParaTelaMatch={irParaTelaMatch} />;
      case "match":
        return <TelaMatch irParaTelaPrincipal={irParaTelaPrincipal} />;
      default:
        return <div>Erro! Página não encontrada :(</div>;
    }
  };

  const irParaTelaPrincipal = () => {
    setTelaPrincipal("profile");
  };

  const irParaTelaMatch = () => {
    setTelaPrincipal("match");
  };

  return <div>{escolheTela()}</div>;
};

export default App;
