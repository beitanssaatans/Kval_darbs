import React, { Component } from 'react';
import Notifications from './Notifications';
import PostLists from '../Posts/PostLists'

class Dashboard extends Component {
    render(){
        return (
            <div className= "Dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostLists />
                    </div>
                    <div className="col s12 m5 offset-m1">
                         <Notifications />
                    </div>
                </div>
            </div>
        )
    }  
}

export default Dashboard