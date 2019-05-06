import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/Posts/PostDetails';
import SignIn from './components/auth/SignIn';
import CreateUser from './components/auth/CreateUser';
import CreatePost from './components/Posts/CreatePost'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/post/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/newuser' component={CreateUser} />
            <Route path='/create' component={CreatePost} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
