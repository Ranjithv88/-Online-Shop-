import './Register.scss'
import {React,useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {MdEmail,MdPassword} from "react-icons/md"
import {IoPhonePortraitOutline,IoEyeOff} from "react-icons/io5"
import {SiMinutemailer} from "react-icons/si"
import {FaClock,FaEye} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"

function Register(){
  const[pass, setPass]=useState('password')
  const[showEye, setShowEye]=useState(true)
  const[userName,SetUserName]=useState(true)
  const[age,SetAge]=useState(true)
  const[email,SetEmail]=useState(true)
  const[password,SetPassword]=useState(true)
  const[phoneNumber,SetPhoneNumber]=useState(true)
  const navigate=useNavigate()
  useEffect(()=>{passwordEye},[])
  function passwordEye(){
      setPass((a)=>(a ==='password'?'text':'password'))
      setShowEye((b)=>!b)
  }
  async function validation(e){
    e.preventDefault()
    let userName=e.target[0].value
    let age=e.target[1].value
    
    let email=e.target[2].value
    let password=e.target[3].value
    let phoneNumber=e.target[5].value
    let obj={
      "userName":e.target[0].value,
      "age":e.target[1].value,
      "email":e.target[2].value,
      "password":e.target[3].value,
      "phoneNumber":e.target[5].value
    }
    if(userName.length<=1){
      console.log('UserName is too Short')
      SetUserName(false)
      e.target[0].value=''
      return
    }else if(age.length!=2){
      console.log('age is the Invalid')
      SetAge(false)
      e.target[1].value=''
      return
    }else if(!email.endsWith('@gmail.com')){
      console.log('Email is Invalid')
      SetEmail(false)
      e.target[2].value=''
      return
    }else if(password.length<=8){
      console.log('Password is to Weak')
      SetPassword(false)
      e.target[3].value=''
      return
    }else if(phoneNumber.length!=10){
      console.log('Phone Number is Invalid')
      SetPhoneNumber(false)
      e.target[5].value=''
      return
    }else{
      console.log(' Validation Successfully .....!');
      if(await Reg_post(obj)){
        navigate('/Log')
      }
      else{
        console.log(' Something wrong ......! ')
        alert(' Please Try Again .......! ')
      }
    }
  }
  async function Reg_post(obj){


    let response=await axios.post('http://localhost:8888/register',{...obj, age:parseInt(obj["age"])})
    console.log(response)
    alert(response.data)
      return response.status === 201
  }
  return(
     /*------------- Register Page Html Element -------------*/
    <div className="Register">
      <main>
        <div className='RegisterBanner'>
          <h1>Information About Online Shop WebSite</h1>
          <p>There are numerous online shopping websites where you can purchase a wide variety of products, from electronics and clothing to groceries and home goods. Below are some of the most popular online shopping platforms globally.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <form className="RegisterForm" onSubmit={validation}>
          <h1>Connect the world of Online Shop</h1>
          <div>
          <i><CgProfile/></i><input type="text" placeholder={userName ? 'UserName' : 'UserName is too Short'}/>
          </div>
          <div>
          <i><FaClock /></i><input type="number"  placeholder={age ? 'age' : 'age is the Invalid'}/>
          </div>
          <div>
          <i><MdEmail /></i><input type="text" placeholder={email ? 'email' : 'Email is Invalid'} />
          </div>
          <div>
          <i><MdPassword /></i><input className='password' type={pass} placeholder={password ? 'password' : 'Password is to Weak'} /><button type='button' onClick={passwordEye}>{showEye ? <FaEye /> : <IoEyeOff />}</button>
          </div>
          <div>
          <i><IoPhonePortraitOutline /></i><input type="number" placeholder={phoneNumber ? 'phoneNumber' : 'Phone Number is Invalid'}/>
          </div>
          <button type='submit'>Send <i><SiMinutemailer /></i></button>
          <span>OR</span>
          <h2>I Have the Account ? <Link to={"/Log"} ><a href="#">Click Here</a></Link></h2>
          <p>By continuing, you agree to Online Shop Terms of Service an acknowledge you've read our Privacy Policy.Notice at collection.</p>
        </form>
      </main>
    </div>
  )
}

export default Register

