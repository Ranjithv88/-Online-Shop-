import './SignIn.scss';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function SignIn() {
  return (
    /*------------- Login Page Html Element -------------*/
    <div className='Login'>
      <form className='LoginForm'>
        <img src="#" alt="Logo" />
        <h1>Welcome to Online Shop</h1>
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <h2>Forget Your Password ?</h2>
        <button className='SignIn'>Sign In</button>
        <span>OR</span>
        <button className='SignG'><h3><FcGoogle /></h3>Continue With Google </button>
        <button className='SignF'><h3><FaFacebook /></h3>Continue With FaceBook </button>
        <button className='SignT'><h3><FaTwitter /></h3>Continue With Twitter </button>
        <span>Don't have the Account ? <Link to={"/Reg"}><a href='#'>Click Here</a></Link></span>
        <p>By continuing, you agree to Online Shop Terms of Service an acknowledge you've read our Privacy Policy.Notice at collection.</p>
      </form>
    </div>
  )
}

export default SignIn

