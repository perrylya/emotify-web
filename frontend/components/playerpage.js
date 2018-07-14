import React from 'react';
import Animations from './Animations'


//when mouse moves

class Playerpage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hover:false,
    }
  }

  onMouseEnterHandler(){
    this.setState({
      hover: true
    })
    console.log('enter')
  }

  onMouseLeaveHandler(){
    this.setState({
      hover: false
    })
    console.log('leave')

  }


  render() {
    var inner = normal;
    if(this.state.hover) {
        inner = hover;
    }
    return (

      <div>
        {/* <div onMouseEnter={this.onMouseEnterHandler.bind(this)}
            onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
            {this.state.hover ? <Animations /> : null}   </div>

           <h1>Hey There</h1> */}
           <div className="cart">
           <Animations />
            <div id="sidebar">
                <div>
                  your playlist
                </div>
              </div>
            </div>
      </div>

    )
  }
}

var outer = {
  height: '120px',
  width: '200px',
  margin: '100px',
  backgroundColor: 'green',
  cursor: 'pointer',
  position: 'relative'
}

var normal = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'red',
  opacity: 0
}

var hover = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'red',
  opacity: 1
}

export default Playerpage;
