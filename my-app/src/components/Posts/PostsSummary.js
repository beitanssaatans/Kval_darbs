import React from 'react';

const PostsSummary = ({post}) => {
    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{post.title}</span>
            <p>Posted by Krisjanis</p>
            <p className="grey-text">7th april, 15:00</p>
        </div>
    </div>
    )
}

export default PostsSummary