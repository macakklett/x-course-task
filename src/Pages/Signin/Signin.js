import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Signin = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.login.value;

    signin(login, () => navigate('/booklist', {replace: true}));
  } 

  return (
    <div>
      <div>Registration Page</div>
      <form onSubmit={handleSubmit}>
        <label>
          Login: <input name='login'></input>
        </label>
        <label>
          Password: <input name='password'></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
export default Signin;