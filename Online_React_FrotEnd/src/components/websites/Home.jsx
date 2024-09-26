import React from 'react'
import './Home.scss'
import NavBar from '../navBar/Navbar'
import Soda from '../content/soda/Soda'
import Footer from '../footer/Footer'
import Chair from '../content/chair/Chair'

function Home() {
  return (
    <div className='websites'>
        <NavBar />
        <Soda />
        <div className='space'></div>
        <Chair />
        <div className='space'></div>
        <Footer />
    </div>
  )
}

export default Home

