import {Link} from 'react-router-dom';
import './navbar.css';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../actions';


export const Nav = () =>{

  useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  if(localStorage.getItem('user') === null){
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
              <li>Flashcards</li>
            </Link>

            <Link to="/learn-choose-category">
              <li>Learn</li>
              </Link>

            <Link to="/">
              <li onClick={() => dispatch(logout())}>Logout</li>
            </Link>
          </ul>
        </nav>
  )
  }
}