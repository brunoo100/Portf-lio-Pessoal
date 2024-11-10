import "./projetos.css";

export default function Projetos() {
  const projeto1 = "https://dashboardfinanceiro.vercel.app/";
  const projeto2 = "https://stream-flix-five.vercel.app/";
  return (
    <div className="projetos-container">
      <h1>Meus Projetos</h1>
      <p>Aqui estão alguns dos projetos em que trabalhei:</p>
      <div className="projetos-list">
        <div className="projeto-card">
          <h2>Projeto 1</h2>
          <p>
            Dashboard financeiro interativo que oferece uma visão detalhada das
            finanças pessoais ou empresariais, alertas personalizados.
            Desenvolvido com React.js e Firebase, proporciona uma interface
            intuitiva e segura para análise e controle eficientes das métricas
            financeiras.
          </p>
          <a href={projeto1} target="_blank" rel="noopener noreferrer">
            <button>Acessar Projeto</button>
          </a>
        </div>
        <div className="projeto-card">
          <h2>Projeto 2</h2>
          <p>
            Criei um site que exibe filmes a partir de uma API pública. O site
            utiliza React para gerenciar o estado e exibir os filmes de forma
            dinâmica, praticando o uso de hooks e componentes funcionais.
          </p>
          <a href={projeto2} target="_blank" rel="noopener noreferrer">
            <button>Acessar Projeto</button>
          </a>
        </div>
        <div className="projeto-card">
          <h2>Projeto 3</h2>
          <p>Descrição breve do projeto.</p>
          <button>Acessar Projeto</button>
        </div>
      </div>
    </div>
  );
}
