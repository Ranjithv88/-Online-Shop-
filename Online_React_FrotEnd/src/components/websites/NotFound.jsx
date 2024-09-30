import React from 'react'
import './NotFound.scss'
import Img from '../../assets/images/Not\ Found.jpg'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

function NotFound() {
  return (
    <div className='NotFound'>
      <img src={Img} alt="" />
      <h1>404 Not Found</h1>
      <Link to='/Home'><button type='button'><FaArrowLeft /> &nbsp;Home Page</button></Link>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nostrum eligendi non illo enim quisquam quibusdam quos accusamus, aliquid beatae maxime exercitationem placeat labore voluptate quo provident facilis corrupti sapiente.</p>
    </div>
  )
}

export default NotFound

