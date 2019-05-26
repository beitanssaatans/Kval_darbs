import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import moment from 'moment';
import YouTube from 'react-youtube';

import { FacebookShareButton, LinkedinShareButton, TwitterIcon } from 'react-share';
import {deletePost} from "../../store/actions/postActions";

const PostDetails = (props) => {
  const { post } = props;
  const opts = {
    position: "absolute",
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0
    }};
  

  if (post) {
      console.log('pposst:', post);
    return (
      <div className="container section project-details">
          <a href={`/edit/${post.id}`}>Rediģēt!</a>
          {/*<a onClick={()=>props.deletePost(post.id)}>Dzēst</a>*/}
          <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) props.deletePost(post.id); props.history.push('/'); } }>
              Delete
          </button>
      <div className="card z-depth-0">
          <div className="card-content">
            <div className="image">
            <img src={ post.image }></img>
            </div>
            
              <span className="card-title">{ post.title }</span>
              <p>{ post.content }</p>
              <br></br>
            <div className="Youtube">
          {
              post.video && (
                <YouTube
                      videoId={ post.video }
                      opts={opts}
                />
              )
          }
            </div>
            
          </div>
          <div className="card-action gret lighten-4 grey-text">
              <div>Posted by { post.authorFirstName} {post.authorLastName}</div>
              <p>{moment(post.createdAt.toDate()).calendar()}</p>
              </div>
          <FacebookShareButton />
          </div>
      </div>
    )
  } else {
    return (
        <div className="container center">
          <p>Loading the post...</p>
        </div>
      )
  }
}


const mapStateToProps = (state, ownProps) => {
    console.log('all', state);
    const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  if (post) {
  return{
    post:{
        id: id,
        ...post,
    }
  }
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection : 'posts' }
  ])
) (PostDetails)