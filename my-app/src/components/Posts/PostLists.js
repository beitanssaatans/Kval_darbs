import React from 'react';
import PostsSummary from './PostsSummary';
import { Link } from 'react-router-dom';

const PostLists =({posts}) => {
    return(
        <div className="project-list section">
            { posts && posts.map(post => {
                return (
                    <Link to = {'/post/'+post.id} key={post.id}>
                    <PostsSummary post={post}  />
                    </Link>
                )
            })}
        </div>
    )
}

export default PostLists