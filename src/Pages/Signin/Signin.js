import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

import imgUserDefault from './avatar.png';

import "./Signin.css";

const Signin = () => {
  const [login, setLogin] = useState('');

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.login.value;

    signin(login, () => navigate('/booklist', {replace: true}));
  } 

  return (
    <div className="container">
      <div className="sign-in">
        <img src={imgUserDefault} alt="icon for user"></img>
        <form onSubmit={handleSubmit} className="form-auth">
          <label htmlFor="login">Username</label>
          <input 
            name='login' type="text" 
            value={login} 
            onChange={handleLoginChange} 
            className="form-auth-input" 
            placeholder="type userName" />
          <button 
            type="submit" 
            disabled={login.length < 4 || login.length > 16} 
            className="form-auth-button">Sign-In
          </button>
        </form>
      </div>
    </div>
  )
}
export default Signin;