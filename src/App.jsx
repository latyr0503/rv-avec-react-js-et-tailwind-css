import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IntroductionScreen from "./components/IntroductionScreen";
import Navbar from "./components/Navbar";
import { Inscription } from "./pages/auth/Inscription";
import { Connexion } from "./pages/auth/Connexion";
import { Dashboard } from "./components/Dashboard";
import TableauDeBord from "./pages/dashbord/TableauDeBord";
import Meet from "./pages/dashbord/Meet";
import MesPatients from "./pages/dashbord/MesPatients";
import MyAccount from "./pages/dashbord/MyAccount";
import { Registerrv } from "./pages/dashbord/Registerrv";
import { Detail } from "./pages/dashbord/Detail";
import { AddPatient } from "./pages/dashbord/AddPatient";
import PageVide from "./pages/PageVide";
import { AuthProvider } from "./pages/auth/AuthProvider";
import PrivateRoute from "./pages/auth/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<IntroductionScreen />} />
            {/* <Route path="/accueil" element={<Accueil />} />
            <Route path="/rv" element={<RendezVous />} />
            <Route path="/mc" element={<MonCompte />} /> */}
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/*" element={<PageVide />} />
          </Route>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          >
            <Route path="/dashboard" element={<TableauDeBord />} />
            <Route path="/dashboard/mes-rendez-vous" element={<Meet />} />
            <Route path="/dashboard/register" element={<Registerrv />} />
            <Route path="/dashboard/addpatient" element={<AddPatient />} />
            <Route path="/dashboard/Detail/:id" element={<Detail />} />
            <Route path="/dashboard/mes-patients" element={<MesPatients />} />
            <Route path="/dashboard/mon-compte" element={<MyAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
