import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Components/Pages/Inicio"
import SobreLasEm from "./Components/Pages/SobreLasEm"
import Cards from "./Components/Pages/Cards";

import Formulario from "./Components/Formulario/Formulario";
import Contacts from "./Components/Formulario/Contacts";

function App() {
  return (
    <>
          
      <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="SobreLasEm" element={<SobreLasEm/>}/>
          <Route path="Cards" element={<Cards/>}/>
          <Route path="Contacts" element={<Contacts/>}/>
          <Route path="Formulario" element={<Formulario/>}/>
          </Route>
      </Routes>
      <>
        
      </>
    </>
  );
}

export default App;
