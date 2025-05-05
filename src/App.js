import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil";
import Espace from "./pages/Espace";
import Savoir from "./pages/Savoir";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Accueil />} />
        <Route path="/espace" element={<Espace />} />
        <Route path="/savoir" element={<Savoir />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;