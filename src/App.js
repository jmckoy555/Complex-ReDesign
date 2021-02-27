import React from 'react';
import Navbar from './Components/Navbar'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Entertainment from './Components/pages/Entertainment';
import Music from './Components/pages/Music';
import Contact from './Components/pages/ContactPage';


function App() {
  return (
   <>
   <Router>
   <GlobalStyle/>
   <Navbar/>
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/entertainmentnews' component={Entertainment}/>
     <Route exact path='/musicnews' component={Music}/>
     <Route exact path='/contact' component={Contact}/>
   </Switch>
   </Router>
   </>
  );
}

export default App;
