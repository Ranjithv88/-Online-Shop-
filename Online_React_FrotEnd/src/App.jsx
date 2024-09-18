import SignIn from './componets/signIn/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.scss';
import Register from './componets/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

