import React from 'react'
import './Soda.scss'
import { Link } from 'react-router-dom'
import Img from '../../../assets/images/soda\ rock.png'
import Cover01 from '../../../assets/images/Cover01.png'
import Cover02 from '../../../assets/images/Cover02.png'
import barCode from '../../../assets/images/barCode.png'

function Soda() {
  return (
    <div className='content01'>
        <span>New Product</span>
          <Link to='/Home/Soda'>
            <div className='SodaBox'>
              <div className='details'>
                <h1>Buying</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.</p>
                <img src={barCode} alt="" />
              </div>
              <div className="banner">
                <div className="product">
                  <div class="soda" style={{'--url': `url(${Cover01})`}}></div>
                  <div class="soda" style={{'--url': `url(${Cover02})`}}></div>
                </div>
                <div className="rock">
                  <img src={Img} alt="" />
                </div>
              </div>
            </div>
        </Link>
    </div>
  )
}

export default Soda

