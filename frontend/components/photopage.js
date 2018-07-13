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
      width: 700,
      height: 700,
      borderRadius: 720/2,
      borderWidth: 2,
      borderColor: 'black',
      facingMode: 'user',
    };
    

      return (
      <div> 
      <div className='photopage'>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
       
      </div>
       <div className="buttondiv">
       <button className='button1' onClick={this.capture}>EMOTIFY</button>
     </div>
     </div>
    );
  }
}

export default WebcamCapture;

