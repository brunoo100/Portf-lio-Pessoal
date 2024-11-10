import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Projetos from "./Pages/Projetos";
import Error from "./Pages/Error";
import Sobremim from "./Pages/Sobremim";



export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
