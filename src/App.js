import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/Styles/styles.css'
import Login from './Components/Forms/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
