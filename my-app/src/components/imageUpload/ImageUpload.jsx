import React, {Component} from 'react';
import {storage} from '../../config/fbConfig';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
  }

  handleChange = e => {
      e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progresa funkcija
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
        
      }, 
    () => {
        // atsauce uz attēlu noliktavu lai iegūtu attēla url
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            //console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    
    return (
      <div className="container" style={{width: '100%', maxWidth: '600px'}}>
        <div className="white">
            <h2 className="col-sm-3">Upload Image</h2>
            <div>
            <progress value={this.state.progress} max="100"/>
            </div>
            <br/>
            <div className="input-field">
                <input  type="file" onChange={this.handleChange}/>
            </div>
                <br/>
              <div>
              <img src={this.state.url } 
               alt="Uploaded images" height="300" width="400" />
              <p>{this.state.url}</p>
              <br/>
                <button className="btn pink lighten-1 z-depth=0" onClick={() => this.handleUpload()}>Upload</button>

            </div>
        </div>
      </div>
    )
  }
}
export default ImageUpload;