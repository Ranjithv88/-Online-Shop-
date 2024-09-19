import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/Reg" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

