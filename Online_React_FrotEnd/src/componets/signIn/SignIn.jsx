import './SignIn.scss';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    /*------------- Login Page Html Element -------------*/
    <div className='LoginOuter'>
      <form className='LoginInner'>
        <div className='LOne'>
          <h1> Online Shop </h1>
          <h5> Use Your Google Account </h5>
        </div>
        <div className='LTwo'>
          <input type="text" placeholder=' Email ' />
          <input type="text" placeholder=' Password ' />
        </div>
        <div className='LThree'>
          <button type='submit' > Sign In </button>
          <h1> Dont Have Account ? <Link to="/register"><a href=""> Click Here </a> </Link> </h1>
        </div>
      </form>
    </div>
  )
}

export default SignIn

