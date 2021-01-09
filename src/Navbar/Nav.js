import {Link} from 'react-router-dom';
import './navbar.css';

export const Nav = () =>{
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
            </ul>
          </nav>
    )
}