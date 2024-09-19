import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="Register">
      <main>
        <div className='RegisterBanner'>
          <h1>Information About Online Shop WebSite</h1>
          <p>There are numerous online shopping websites where you can purchase a wide variety of products, from electronics and clothing to groceries and home goods. Below are some of the most popular online shopping platforms globally.</p>
        </div>
        <form className="RegisterForm" >
          <h1></h1>
          <div>
            <input type="text" placeholder='UserName' />
          </div>
          <div>
            <input type="number" placeholder='Age' />
          </div>
          <div>
            <input type="email" placeholder='Email' />
          </div>
          <div>
            <input type="password" placeholder='Password' />
          </div>
          <div>
            <input type="number" placeholder='Phone Number' />
          </div>
          <button></button>
          <span></span>
          <h2>Back to the <Link to={"/"} ><a href="#">Sign In</a></Link></h2>
          <p></p>
        </form>
      </main>
    </div>
  )
}

export default Register

