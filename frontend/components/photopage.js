import React from 'react';
import Webcam from 'react-webcam';
import { Redirect } from 'react-router-dom';

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

  playMusic() {
    this.setState({toPlayerPage: true})
    console.log(this.state.toPlayerPage)
  }

  render() {
    const videoConstraints = {
      width: 400,
      height: 400,
      borderWidth: 2,
      borderColor: 'black',
      facingMode: 'user',
    };

    if(this.state.toPlayerPage === true) {
      <Redirect to='/playerpage' />
    }

    return (
      <div>
      {this.state.image ?
          <div>
          <div className='photopage'>
            <img src={this.state.image}/>

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
              height={500}
              ref={this.setRef.bind(this)}
              screenshotFormat="image/jpeg"
              width={500}
              style={videoConstraints}
            />

             </div>
               <div className="buttondiv" >
               <button className="button1" onClick={this.capture.bind(this)}>EMOTIFY</button>
             </div>
            </div>
        }
      </div>
    );
  }
}

export default WebcamCapture;
