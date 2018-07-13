import React from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: ''
    }
  }
  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
    this.setState({image: imageSrc})
  };

  takeAnotherPhoto() {
    this.setState({image: ''})
  }

  render() {
    const videoConstraints = {
      width: 300,
      height: 300,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'black',
      facingMode: 'user',
    };

    return (
      <div>
        {this.state.image ?
          <div>
            <img src={this.state.image}/>
            <div>
              <button onClick={this.takeAnotherPhoto.bind(this)}>Retake photo</button>
            </div>
          </div>
          :
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef.bind(this)}
              screenshotFormat="image/jpeg"
              width={350}
              style={videoConstraints}
            />
            <div>
              <button onClick={this.capture.bind(this)}>Capture photo</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default WebcamCapture;
