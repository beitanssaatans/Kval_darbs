import React, { Component } from 'react';
import * as firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

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
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <h1>{this.state.speed}</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
