import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil";
import Espace from "./pages/Espace";
import Savoir from "./pages/Savoir";
import Debut from "./pages/Debut";
import Activity from "./pages/Activity";
import Formulaire from "./pages/Formulaire";
import ResultPage from "./pages/ResultPage";
import Situation from "./pages/Situation";
import Finalisation from "./pages/Finalisation";
import Actions from "./pages/Actions";
import Inscription from "./pages/Inscription";
import Fin from "./pages/Fin";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Accueil />} />
        <Route path="/espace" element={<Espace />} />
        <Route path="/savoir" element={<Savoir />} />
        <Route path="/debut" element={<Debut />} />
        <Route path="/activité" element={<Activity />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/questionnaire" element={<Finalisation />} />
        <Route path="/validation" element={<Actions />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/final" element={<Fin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;