import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/Posts/PostDetails';
import SignIn from './components/auth/SignIn';
import CreateUser from './components/auth/CreateUser';
import CreatePost from './components/Posts/CreatePost';
import Conference from './components/conference/Conference2019';
import ImageUpload from './components/imageUpload/ImageUpload';
import EditPost from './components/Posts/EditPost';

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
            <Route path='/tedxriga2019' component={Conference} />
            <Route path='/imgupload' component={ImageUpload} />
            <Route path='/edit/:id' component={EditPost} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
