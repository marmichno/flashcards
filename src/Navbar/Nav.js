import {Link} from 'react-router-dom';
import './navbar.css';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../actions';


export const Nav = () =>{

  const loginState = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  let isUserLoggedIn = localStorage.getItem('user');

  if(localStorage.getItem('username') === null){
    return(
        <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/register">
                <li>Register</li>
              </Link>
            </ul>
          </nav>
    )
  }else{
    return(
      <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/editCategories">
              <li>Edit Flashcards</li>
            </Link>

            <Link to="/register">
              <li>Register</li>
            </Link>
              <li>Learn</li>

            <Link to="/">
              <li onClick={() => dispatch(logout())}>Logout</li>
            </Link>
          </ul>
        </nav>
  )
  }
}