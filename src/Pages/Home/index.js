import "./Home.css";
import avartar  from "../../img/image.png";
import curriculo from '../../pdf/curriculo.pdf';  // Importação do PDF

export default function Home() {
  // Link do WhatsApp com a mensagem automática
  const whatsappLink = "https://api.whatsapp.com/send?phone=5561991130512.";

  // Função para baixar o currículo
  const handleDownload = () => {
    // Cria um link temporário e dispara o download
    const link = document.createElement("a");
    link.href = curriculo;  // Caminho correto do arquivo PDF importado
    link.download = "curriculo.pdf"; // Nome do arquivo ao ser baixado
    link.click();
  };

  return (
    <div className="container">
      <div className="txt">
        <h1>Olá, eu sou <span>Bruno</span>, desenvolvedor front-end</h1>
        <p>
          Desenvolvedor front-end com experiência em criar soluções de alta qualidade,
          utilizando tecnologias como React, JavaScript e HTML/CSS.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="contact-btn">Entrar em contato</button>
        </a>
        <button className="contact-btn" onClick={handleDownload}>Baixar meu currículo</button>
      </div>
      <div className="img">
        <img src={avartar} alt="Bruno" />
      </div>
    </div>
  );
}
