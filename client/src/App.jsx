import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Theme from "./components/Theme.jsx";
import Accueil from "./pages/Accueil.jsx";
import Formation from "./components/Formation.jsx";
import { useContext } from "react";
import { FormationContext } from "./context/FormationContext.jsx";
import Planning from "./pages/Planning.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  // const { selectedTheme, selectedFomation } = useContext(FormationContext);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/formation/:id" element={<Formation />} />
        <Route path="/theme/:id" element={<Theme />} />
        <Route path="/signIn" element={<SignIn />} />
      
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
