import React from 'react';
import moment from 'moment';

const PostsSummary = ({post}) => {
    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <img src={ post.image }></img>
            <span className="card-title">{post.title}</span>
            <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
            <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
    )
}

export default PostsSummary