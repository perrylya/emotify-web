import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

import Playerpage from './Playerpage'

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      toPlayerPage: false,
      playlist: ''
    }
  }
  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({image: imageSrc})
  };

  takeAnotherPhoto() {
    this.setState({image: ''})
  }



playMusic() {
    var image = this.state.image;
    var self = this;
    console.log(image);
    axios.post('/image/create', {
      image: image
    })
    .then((res) => {
      console.log("This is completed "+res.data);
      axios.get('http://localhost:8888/getTrack/'+res.data)
      .then(function(response){
        console.log(response);
        self.setState({
          toPlayerPage: !self.state.toPlayerPage,
          playlist: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    })
    console.log(this.state.toPlayerPage)
  }

  render() {

    return (
      <div pageName='page'>
        {this.state.toPlayerPage ?
          <Playerpage playlist={this.state.playlist}/>
          :
          this.state.image ?
          <div >
            <h1>EMOTIFY</h1>
            <div className='photopage' >
              <img className='webcam' src={this.state.image}/>
            </div>
            <div className="buttondiv">
              <button className="button1" onClick={this.takeAnotherPhoto.bind(this)}>RETAKE</button>
              <button className="button1" onClick={this.playMusic.bind(this)}>PLAY MUSIC</button>
            </div>
          </div>
          :
          <div>
            <h1>EMOTIFY</h1>
            <div className='photopage'>
              <Webcam
                audio={false}
                ref={this.setRef.bind(this)}
                screenshotFormat="image/jpeg"
                className='webcam'
              />
            </div>
            <div>
              <button className="button1" onClick={this.capture.bind(this)}>TAKE PHOTO</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default WebcamCapture;
