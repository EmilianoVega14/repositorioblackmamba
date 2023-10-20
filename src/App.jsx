import "./App.css";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner";
import NavBar from "./componentes/navBar.jsx/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nosotros from "./componentes/nosotros/Nosotros";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/productos" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/productos/:categoria" element={<ItemListConteiner />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
