import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';


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

  submitEmotions() {

    var image = this.state.image;
    console.log(image);
    axios.post('/image/create', {
      image: image
    })
    .then((res) => {
      console.log(res);
    })

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
          <div className = 'photopage'>
            <img src={this.state.image}/>
            <div className="buttondiv">
              <button className="button1" onClick={this.takeAnotherPhoto.bind(this)}>RETAKE</button>
              <button className="button1" onClick={this.submitEmotions.bind(this)}>EMOTIFY</button>
            </div>
          </div>
        :
        <div>
          <div className='photopage'>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef.bind(this)}
              screenshotFormat="image/jpeg"
              width={350}
              style={videoConstraints}
            />

             </div>
               <div className="buttondiv" >
               <button className="button1" onClick={this.capture.bind(this)}>SELFIE</button>
             </div>
            </div>
        }
      </div>
    );
  }
}

export default WebcamCapture;
