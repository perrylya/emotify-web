import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

import Playerpage from './Playerpage'

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      toPlayerPage: false
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



  async playMusic() {
    var image = this.state.image;
    console.log(image);
    axios.post('/image/create', {
      image: image
    })
    .then((res) => {
      console.log(res);
    })
    await this.setState({toPlayerPage: !this.state.toPlayerPage})
    console.log(this.state.toPlayerPage)
  }

  render() {

    return (
      <div pageName='page'>
        {this.state.toPlayerPage ?
          <Playerpage />
          :
          this.state.image ?
            <div>
              <div className='photopage'>
                <img className='webcam' src={this.state.image}/>
              </div>
              <div className="buttondiv">
                <button className="button1" onClick={this.takeAnotherPhoto.bind(this)}>RETAKE</button>
                <button className="button1" onClick={this.playMusic.bind(this)}>PLAY MUSIC</button>
              </div>
            </div>
            :
            <div>
              <div className='photopage'>
                <Webcam
                  audio={false}
                  // height={400}
                  ref={this.setRef.bind(this)}
                  screenshotFormat="image/jpeg"
                  // width={500}
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
