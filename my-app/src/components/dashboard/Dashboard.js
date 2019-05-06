import React, { Component } from 'react';
import RecentPosts from './RecentPosts';
import PostLists from '../Posts/PostLists';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
                         <RecentPosts />
                    </div>
                </div>
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.firestore.ordered.posts,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Dashboard)