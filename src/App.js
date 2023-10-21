import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/Styles/styles.css'
import Login from './Components/Forms/Login';
import Main from './Components/Container/Main';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='main' element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
