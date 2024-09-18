import './Register.scss';
import { Link } from 'react-router-dom';

function Register() {
  function handleSubmit (e) {
    e.preventDefault();
    console.log(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value);
    
  }
  return (
    <div className="register">
      <form className="RForm" onSubmit={handleSubmit} >
        <h1> Register </h1>
        <label htmlFor="userName"> Name : </label><input type="text" id="userName" />
        <label htmlFor="age"> Age : </label><input type="number" id="age" />
        <label htmlFor="email"> email : </label><input type="email" id="email" />
        <label htmlFor="password"> password : </label><input type="password" id="password" />
        <label htmlFor="PhoneNumber"> PhoneNumber : </label><input type="number" id="PhoneNumber" />
        <h2> Return to <Link to="/"><a href="#"> Sign In </a></Link></h2>
        <button> Submit </button>
      </form>
    </div>
  )
}

export default Register

