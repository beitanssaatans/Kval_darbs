import React, { Component } from 'react';
import * as firebase from 'firebase';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/Posts/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/Posts/CreatePost'

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }
  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }
  // <h1>{this.state.speed}</h1>
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/post/:id' component={PostDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreatePost} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
