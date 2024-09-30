import React from 'react'
import './SuccessPage.scss'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6"

function SuccessPage({email}) {
  return (
    <div className='successFully'>
        <div className='success'>
          <h1>Welcome Back !</h1>
          <h2>{email}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis ipsa officiis eveniet voluptatem sapiente illo in totam aliquid, deserunt quo neque ad, doloremque deleniti consectetur suscipit porro ducimus nobis.</p>
          <div>
          <Link to='/Home'><button type='button'><span>Explore </span><FaArrowRightLong className='arrow'/></button></Link>
          </div>
        </div>
    </div>
  )
}

export default SuccessPage

