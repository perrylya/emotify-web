import React from 'react';
import Animations from './animations'
import Animations2 from './animations2'


//when mouse moves

class Playerpage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hover:false,
    }
  }

  render() {
    var inner = normal;
    if(this.state.hover) {
        inner = hover;
    }
    return (
    
      <div> 
     
           <div className="cart" style={{background: `linear-gradient(to bottom, #FFB6C1, 	#F0E68C` }}>
           <Animations2/> 
            <div id="sidebar"> 
                <div> 
                  <div> Artist Name:  </div> <br/> 
             
                  <div>  Song Name: </div> 
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