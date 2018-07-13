import React from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends React.Component {
  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    const videoConstraints = {
      width: 720,
      height: 720,
      borderRadius: 720/2,
      borderWidth: 2,
      borderColor: 'black',
      facingMode: 'user',
    };

      return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <div>
          <button onClick={this.capture}>Capture photo</button>
        </div>
      </div>
    );
  }
}

export default WebcamCapture;
