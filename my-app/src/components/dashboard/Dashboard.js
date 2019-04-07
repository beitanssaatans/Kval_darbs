import React, { Component } from 'react';
import Notifications from './Notifications';
import PostLists from '../Posts/PostLists';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){
      //  console.log(this.props);
      const { posts } = this.props;
        return (
            <div className= "Dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostLists posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                         <Notifications />
                    </div>
                </div>
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Dashboard)