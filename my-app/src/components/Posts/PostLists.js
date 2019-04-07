import React from 'react';
import PostsSummary from './PostsSummary';

const PostLists =({posts}) => {
    return(
        <div className="project-list section">
            { posts && posts.map(post => {
                return (
                    <PostsSummary post={post} key={post.id} />
                )
            })}
        </div>
    )
}

export default PostLists