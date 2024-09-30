import {React,useEffect,useState } from 'react'
import './ChairSlug.scss'
import { useParams,useNavigate } from 'react-router-dom' 
import { products } from './ProductDetails.jsx'
import Navbar from '../../navBar/Navbar.jsx'
import Footer from '../../footer/Footer.jsx'
import { FaShoppingCart } from "react-icons/fa"

function ChairSlug() {
  const navigate=useNavigate()
  const { slug } = useParams()
  const [quantity,setQuantity]=useState(1) 
  const [detail, setDetail] = useState([])
  const [prices,setPrices]=useState(true)
  useEffect(()=>{
    const findDetail = products.filter(product=>product.slug===slug)
    console.log(findDetail)
    if(findDetail.length > 0)
      setDetail(findDetail[0])
    else
      navigate('/Home/Chair')
  },[slug])
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    setPrices(false)
  }
  const handlePlusQuantity = () => {
      setQuantity(quantity + 1)
      setPrices(false)
  }
  
  return (
    <>
      <Navbar/>
      <div className='ChairSlugOuter'>
        <h1>Products Details</h1>
        <div className='ChairSlugFirst'>
          <img src={detail.image} alt="" />
        </div>
        <div className='ChairSlugSecond'>
          <h5>{detail.name}</h5>
          <h2>price $ {prices? detail.price:detail.price*quantity}</h2>
          <h3>Quantity</h3>
          <div className='quantity'>
            <button type='button' onClick={handlePlusQuantity}>+</button>
            <span>0{quantity}</span>
            <button type='button' onClick={handleMinusQuantity}>-</button>
          </div>
          <button className='chairSlugCart' type='button'><FaShoppingCart/>&nbsp; &nbsp;Add to Cart</button>
          <p>{detail.description}</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ChairSlug

