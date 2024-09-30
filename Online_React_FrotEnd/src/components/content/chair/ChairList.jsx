import React from 'react'
import './ChairList.scss'
import { products } from './ProductDetails.jsx'
import { Link } from 'react-router-dom'

function ChairList() {
  const WinScroll=()=>{
    window.scrollTo({
      top: 80
    })
  }
  return (
    <div className='chairProductList'>
      <div className='ChairBanner'>
        <h1>"Buy a chair with care, for you’ll sit with it for years"</h1>
        <p>The proverb "Buy a chair with care, for you’ll sit with it for years" carries a deeper, metaphorical meaning. It advises people to make careful and thoughtful decisions, especially regarding long-term investments or choices that will have lasting effects. The "chair" symbolizes something that will provide support and comfort over a long period, much like how certain decisions or investments influence your life for years to come.</p>
      </div>
      <div className='chairProduct'>
        {products.map((product, key) => (
          <Link to={product.slug} onClick={WinScroll}>
            <div key={key} className="chairProductItem" >
              <img src={product.image} alt="" /> 
              <h2>{product.name}</h2>
              <h4>Price: ${product.price}</h4>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ChairList

