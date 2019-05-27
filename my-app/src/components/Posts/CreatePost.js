import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import ImageUpload from '../../components/imageUpload/ImageUpload'


class CreatePost extends Component {
    state ={
        title: '',
        content: '',
        video: '',
        image: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createPost(this.state)
        this.props.history.push('/');
    }
  render() {
    const {  auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="black-text text-darken-1">Create Post</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"  required onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Post content</label>
                <textarea id="content" className="materialize-textarea" required onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <label htmlFor="video">Insert video ID from YouTube</label>
                <textarea id="video" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth=0">Create</button>
            </div>
            <div className="input-field">
                <label htmlFor="image">Insert an image URL</label>
                <input type="text" id="image" onChange={this.handleChange}/>
            </div>
        </form>
        <ImageUpload/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
