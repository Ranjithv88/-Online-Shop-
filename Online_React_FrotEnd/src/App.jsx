import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import Navbar from './components/navBar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/Reg" element={<Register />}/>
        <Route path="/Home" element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

