import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import moment from 'moment';
import YouTube from 'react-youtube';
import { FacebookShareButton, LinkedinShareButton, TwitterIcon } from 'react-share';

const PostDetails = (props) => {
  const { post } = props;
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }};

  if (post) {
    return (
      <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">{ post.title }</span>
              <p>{ post.content }</p>
              <br></br>
              <YouTube
                  videoId={ post.video }
                  opts={opts}
              />
          </div>
          <div className="card-action gret lighten-4 grey-text">
              <div>Posted by { post.authorFirstName} {post.authorLastName}</div>
              <p>{moment(post.createdAt.toDate()).calendar()}</p>
              </div>
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
  // console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return{
    post: post
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'posts' }
  ])
) (PostDetails)