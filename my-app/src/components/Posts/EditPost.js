import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import ImageUpload from '../../components/imageUpload/ImageUpload'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

class EditPost extends Component {
    state ={
        id: '',
        title: '',
        content: '',
        video: '',
        image: ''
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log( 'real : ', nextProps)
        if (nextProps.post) {
            this.setState({
                ...nextProps.post
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.editPost(this.state.id, this.state)
        this.props.history.push(`/post/${this.state.id}`);
    }
  render() {
    const { post, posts, auth, input } = this.props;
    const { title, content, video, image} = this.state;
    if(auth && !auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container create-form">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="black-text text-darken-1">Edit Post</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Post content</label>
                <textarea id="content" value={content} className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <label htmlFor="video">Insert video ID from YouTube</label>
                <textarea id="video" value={video} className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth=0">Create</button>
            </div>
            <div className="input-field">
                <label htmlFor="image">Insert an image URL</label>
                <input type="text" value={image} id="image" onChange={this.handleChange}/>
            </div>
        </form>
        <ImageUpload/>
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
        auth: state.firebase.auth,
        post:{
            id: id,
            ...post,
        }
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (postId, post) => dispatch(editPost(postId, post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection : 'posts' }
    ])
) (EditPost)