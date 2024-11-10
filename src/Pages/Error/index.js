import React from "react";
import { Link } from "react-router-dom"; // Para navegação (caso use o React Router)
import "./Error.css"; // Importando o arquivo CSS para estilização

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Algo deu errado.</h1>
        <p className="error-message">
          A página que você está procurando não foi encontrada. Por favor, tente novamente ou volte para a página inicial.
        </p>
        <Link to="/" className="error-btn">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
