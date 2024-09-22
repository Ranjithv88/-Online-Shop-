import './SignIn.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook,FaTwitter,FaArrowRightLong } from "react-icons/fa6"
import { useState } from 'react'

function SignIn(){
  const[Success,SetSuccess]=useState(true)
  const[page,SetPage]=useState('Unknown')
  async function submit(e){
    e.preventDefault()
    let obj={
      "email":e.target[0].value,
      "password":e.target[1].value
    }
    console.log(obj)
    let response=await axios.post('http://localhost:8888/login',obj)
    console.log(response.data)
    if(!alert(response.data)){
      localStorage.setItem("token",response.data)
      let sEmail=obj.email
      SetPage(sEmail.slice(0,-10))
      console.log(sEmail.slice(0,-10))
      SetSuccess(false)
    }else{
      alert('UserName and Password is Invalid ......!')
    }
  }

  return (
    <>
    {Success ? 
      /*------------- Login Page Html Element -------------*/
      <div className='Login'>
        <form className='LoginForm' onSubmit={submit}>
          <img src="#" alt="Logo" />
          <h1>Welcome to Online Shop</h1>
          <input type="text" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <h2>Forget Your Password ?</h2>
          <button className='SignIn' button='submit'>Sign In</button>
          <span>OR</span>
          <button className='SignG'><h3><FcGoogle /></h3>Continue With Google </button>
          <button className='SignF'><h3><FaFacebook /></h3>Continue With FaceBook </button>
          <button className='SignT'><h3><FaTwitter /></h3>Continue With Twitter </button>
          <span>Don't have the Account ? <Link to='/Reg'><a href='#'>Click Here</a></Link></span>
          <p>By continuing, you agree to Online Shop Terms of Service an acknowledge you've read our Privacy Policy. Notice at collection.</p>
        </form>
      </div> 
      : 
      /*------------- Success Page Html Element -------------*/
      <div className='successFully'>
        <div className='success'>
          <h1>Welcome Back !</h1>
          <h2>{page}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis ipsa officiis eveniet voluptatem sapiente illo in totam aliquid, deserunt quo neque ad, doloremque deleniti consectetur suscipit porro ducimus nobis.</p>
          <div>
          <Link to='/Home'><button type='button'><span>Explore </span><FaArrowRightLong className='arrow'/></button></Link>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default SignIn

