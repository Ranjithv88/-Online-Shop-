import React from 'react'
import './Footer.scss'
import { FcGoogle } from "react-icons/fc"
import { FaSquareInstagram,FaArrowRight } from "react-icons/fa6"
import { FaGithub,FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <div className='fBox'>
      <footer>
        <div className='divFooter'> 
            <h1> The agency for impatient brands@ <FaArrowRight className='divFooterIcon' /> </h1>
              <ul>
                <h1> Follow Us </h1>
                  <ul>
                      <li><a href='#' target="_black" alt='Google'><FcGoogle className='FIcon01'/></a></li>
                      <li><a href='#' target="_black" alt='Instagram'><FaSquareInstagram className='FIcon02'/></a></li>
                      <li><a href='#' target="_black" alt='LinkedIn'><FaLinkedin className='FIcon03'/></a></li>
                      <li><a href='https://github.com/Ranjithv88/websites' target="_black" alt='GitHub'><FaGithub className='FIcon04'/></a></li>
                  </ul>   
              </ul>
              <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @CopyRight-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolore omnis ad aliquid, sunt impedit dolorum magnam eveniet voluptates neque tempore provident harum quae molestiae nisi ipsam dicta totam sapiente?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolore omnis ad aliquid, sunt impedit dolorum magnam eveniet voluptates neque tempore provident harum quae molestiae nisi ipsam dicta totam sapiente?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolore omnis ad aliquid, sunt impedit dolorum magnam eveniet voluptates neque tempore provident harum quae molestiae nisi ipsam dicta totam sapiente?</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer

