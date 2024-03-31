import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import  './Header.css';

const  Header = () => {
  console.log("render Header");

  const navigate = useNavigate();
  const { user, signout } = useAuth();
  const handleOut = () => {
    signout(() => navigate('/'), {replace: true})
  }

  return (  
    <header className={'header'}>
      <Link to='/booklist'>BookList</Link>
      {user && 
        <>
          <div>Hello {user}</div>
          <button onClick={handleOut}>Sign Out</button>
          <Link to='/cart'>Cart</Link>
        </>
      }
      
    </header>
  )
}
export default Header;