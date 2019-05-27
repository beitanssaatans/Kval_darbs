import React from 'react';
import moment from 'moment';

// servera puses funkcija atgriež pēdējos publicētos rakstus
const RecentPosts = (props) => {
    const {recentPosts} = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Recent Posts</span>
                    <ul className="post-title">
                        { recentPosts && recentPosts.map(item => {
                            return(
                            <li key={item.id}>
                                <span className="pink-text">{item.title}</span>
                                <div className="grey-text note-date">
                                {moment(item.time.toDate()).calendar()}
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentPosts