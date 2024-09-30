import './SignIn.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook,FaTwitter } from "react-icons/fa6"
import { useState } from 'react'
import SuccessPage from '../content/success page/SuccessPage'

function SignIn(){
  const[Success,SetSuccess]=useState(true)
  const [send,setSend]=useState("not-allowed")
  const [email,setEmail]=useState('unknown')  
  async function submit(e){
    e.preventDefault()
    alert(' Pleace wait Few Seconds .....! ')
    let obj={
      "email":e.target[0].value,
      "password":e.target[1].value
    }
    console.log(obj)
    let response=await axios.post('http://localhost:8888/login',obj)
    console.log(response.data)
    if(!alert(response.data)){
      localStorage.setItem("token",response.data)
      let sEmail=obj.email.slice(0,-10)
      setEmail(sEmail)
      console.log(sEmail)
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
          <button className='SignIn' style={{curser:send}} button='submit'>Sign In</button>
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
      <SuccessPage data={email}/>
      }
    </>
  )
}

export default SignIn

