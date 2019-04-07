import React from 'react'

const PostDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
    <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Post Title - {id}</span>
            <p>Lorem stufy stufy</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by KB</div>
            <div>7th April, 18:49</div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

