import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Book from './components/Book/Book';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        {/* <Navbarmenu /> */}
        
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/book" component={Book}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
