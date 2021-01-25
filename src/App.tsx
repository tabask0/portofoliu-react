import React from 'react';
import './App.css';
import Sidebar, {} from './components/Sidebar'
import Navbar from './components/Navbar'
import { Redirect, Route, Switch, useLocation} from 'react-router-dom';
import  About  from './components/About';
import  Resume  from './components/Resume';
import  Projects  from './components/Projects';
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()

  return (
  
    <div className="App">
      <div className="container app_container">
        <div className="row app_row">
         <div className="col-lg-3">
            <Sidebar />
        </div>
      <div className="col-lg-9 app_main-content">
          <Navbar/>
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
          <Route exact path ="/">
            <About/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/projects" component={Projects}/>
          <Route>
            <Redirect to="/" />
          </Route>
          </Switch>
          </AnimatePresence>
     </div>
      </div>
    </div>
    </div>
);
}

export default App;
