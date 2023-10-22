import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/Styles/styles.css'
import Login from './Components/Forms/Login';
import Main from './Components/Container/Main';
import Events from './Components/Container/Events';
import MainMenu from './Components/Pure/MainMenu';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='main' element={<Main />}>
            <Route path='' element={<MainMenu />} />
            <Route path='events' element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
