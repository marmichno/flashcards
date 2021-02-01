import {HomePage} from './HomePage/HomePage';
import {Nav} from './Navbar/Nav';
import {ShowCategories} from './ModifyFlashcards/ShowCategories';
import {ShowFlashcards} from './ModifyFlashcards/ManageFlashcards/ShowFlashcards';
import {Register} from './Register/Register';
import {LearningModesController} from './Learning/learningModes/LearningModesController';
import {ChooseCategory} from './Learning/ChooseCategory';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from './actions';

function App() {

  const dispatch = useDispatch();
  let isUserLoggedIn = localStorage.getItem('user');

  if(isUserLoggedIn !== null){
    dispatch(login())
  }

    return(
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/editCategories" component={ShowCategories}/>
            <Route path="/editFlashcards" component={ShowFlashcards}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/learn-choose-category" component={ChooseCategory}/>
            <Route exact path="/learn-choose-category/learning" component={LearningModesController}/>
          </Switch>
        </Router>
          )
  }

export default App;
