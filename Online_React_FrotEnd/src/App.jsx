import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import Navbar from './components/navBar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/websites/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Log" element={<SignIn />}/>
        <Route path="/Reg" element={<Register />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Home/Soda" element={<><Navbar /><Footer /></>}/>
        <Route path="/Home/Chair" element={<><Navbar /><Footer /></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

