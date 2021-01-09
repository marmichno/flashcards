import React, {useEffect, useState} from 'react'
import {HomePage} from './HomePage/HomePage';
import {Nav} from './Navbar/Nav';
import {ShowCategories} from './ModifyFlashcards/ShowCategories';
import {ShowFlashcards} from './ModifyFlashcards/ManageFlashcards/ShowFlashcards';
import {Register} from './Register/Register';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

    return(
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/editCategories" component={ShowCategories}/>
            <Route path="/editFlashcards" component={ShowFlashcards}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </Router>
          )
}

export default App;
