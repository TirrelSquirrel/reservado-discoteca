import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./Components/Styles/styles.css";
import Login from "./Components/Forms/Login";
import Main from "./Components/Container/Main";
import Events from "./Components/Container/Events";
import MainMenu from "./Components/Pure/MainMenu";
import Reservados from "./Components/Container/Reservados";
import ReservadosMenu from "./Components/Pure/ReservadosMenu";
import DetallesReservado from "./Components/Forms/DetallesReservado";
import BottlesList from "./Components/Pure/BottlesList";

const LugarReservado = () => {
  let { bookPlace } = useParams();
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route path="" element={<MainMenu />} />
          <Route path="events" element={<Events />} />
          <Route path="book" element={<Reservados />}>
            <Route path="" element={<ReservadosMenu />} />
            <Route path=":bookPlace" element={<DetallesReservado />} />
          </Route>
          <Route path="bottles" element={<BottlesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
