import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa"
import { FaMicrophone } from "react-icons/fa6";

function Navbar() {
  const [search,setSearch]=useState(false)
  const [log,setLog]=useState(false)
  useEffect(()=>{    
    let token=localStorage.getItem('token')
    // const decode=jwt.decode(token)
    // console.log(decode)
  },[])
  return (
    <div className='NavBox'>
      {/*------------- Navbar Html Element -------------*/}
      <div className='Navbar'>
          <div className='N01'>
            <img src='#' alt='Logo'/>
            <h1>Online Shop</h1>
          </div>
          <div className='N02'>
            <ul>
              <li><Link to='/Home'><a href="">Home</a></Link></li>
              <li><a href="">Product</a></li>
              <li><a href="">About</a></li>
            </ul>
          </div>
          <div className='N03'>
            <div className='searchButton'>
              <button onClick={() => setSearch((prevSearch) => !prevSearch)}type='button'><IoSearchOutline /></button>
            </div>
            {log ? <>
              <div className='profile'>
                <img src="" alt="" />
                <h4>Unknown</h4>
              </div>
              <div className="cart">
                <FaShoppingCart className='cartIcon' />
                <h4>0</h4>
              </div> </> : <>
              <div className='unknown'>
                <Link to='/Reg'><button className='RegisterBtn' type='button'>Register</button></Link>
                <Link to='/Log'><button className='LogInBtn'  type='button'>Log In</button></Link>
              </div>
              </>
              }
          </div>
      </div>
      {/*------------- Search Html Element -------------*/}
      {search ?
      <div className="search">
        <div className='searchHeading'>
        <h1>Online Shop</h1>
        </div>
        <div className="inputBar">
          <IoSearchOutline className='searchBarIcon'/>
          <input type="text" placeholder='Search' />
          <button type='button'><FaMicrophone /></button>
        </div>
      </div>:<><div className='Empty'></div></>}
    </div>
  )
}

export default Navbar

