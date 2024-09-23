import React from 'react'
import './Home.scss'
import NavBar from './navBar/Navbar'
import Soda from './content/soda/Soda'
import Footer from './footer/Footer'

function Home() {
  return (
    <div className='websites'>
        <NavBar />
        <Soda />
        <div className='space'></div>
        <Footer />
    </div>
  )
}

export default Home

