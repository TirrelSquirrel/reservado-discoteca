import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components/Styles/styles.css";
import Login from "./Components/Forms/Login";
import Main from "./Components/Container/Main";
import Events from "./Components/Container/Events";
import MainMenu from "./Components/Pure/MainMenu";
import Reservados from "./Components/Container/Reservados";
import ReservadosMenu from "./Components/Pure/ReservadosMenu";
import DetallesReservado from "./Components/Forms/DetallesReservado";
import BottlesList from "./Components/Pure/BottlesList";
import FAQ from "./Components/Pure/FAQ";
import ErrorComponent from "./Components/Pure/ErrorComponent";
import AdminPanel from "./Components/Admin/Container/AdminPanel";
import AdminMenu from "./Components/Admin/Pure/AdminMenu";
import NewEvent from "./Components/Admin/Pure/Events/NewEvent";
import EditEventsList from "./Components/Admin/Pure/Events/EditEventsList";
import AdminEventsMenu from "./Components/Admin/Pure/Events/AdminEventsMenu";
import EditEventForm from "./Components/Admin/Pure/Events/EditEventForm";
import EditEventsContainer from "./Components/Admin/Container/EditEventsContainer";
import EditFAQsContainer from "./Components/Admin/Container/EditFAQsContainer";

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
          <Route path="faq" element={<FAQ />} />
          <Route path="admin" element={<AdminPanel />}>
            <Route path="" element={<AdminMenu />} />
            <Route path="events" element={<EditEventsContainer />}>
              <Route path="" element={<AdminEventsMenu />} />
              <Route path="create" element={<NewEvent />} />
              <Route path="edit" element={<EditEventsContainer />}>
                <Route path="" element={<EditEventsList />} />
                <Route path=":eventid" element={<EditEventForm />} />
              </Route>
            </Route>
            <Route path="faq" element={<EditFAQsContainer />}>
              <Route path="" element={undefined} />
              <Route path="create" element={undefined} />
              <Route path="edit" element={undefined}>
                <Route path="" element={undefined} />
                <Route path=":faqid" element={undefined} />
              </Route>
            </Route>
            <Route path="bottles" element={undefined}>
              <Route path="" element={undefined} />
              <Route path="create" element={undefined} />
              <Route path="edit" element={undefined}>
                <Route path="" element={undefined} />
                <Route path=":faqid" element={undefined} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
