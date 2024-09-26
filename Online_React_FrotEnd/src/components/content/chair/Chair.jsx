import React from 'react'
import './Chair.scss'
import { Link } from 'react-router-dom'
import Img01 from '../../../assets/images/chair/1.png'
import Img02 from '../../../assets/images/chair/2.png'

function Chair() {
  return (
    <div className='content02'>
        <span>Furniture</span>
          <Link to='/Home/Chair'>
            <div className='ChairBox'>
              <div className='chairFea'>
              <div className="chair" style={{'--url': `url(${Img01})`}}></div>
              <div className="chair" style={{'--url': `url(${Img02})`}}></div>
              </div>
              <div className='ChairDetails'>
                <h1>Buying</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni reiciendis sint provident culpa, doloremque rerum pariatur dolore ipsam placeat ducimus sapiente, recusandae atque earum blanditiis ullam dolores vitae numquam.</p>
              </div>
            </div>
        </Link>
    </div>
  )
}

export default Chair

