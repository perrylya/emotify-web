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
 
    return (
    
      <div className="playerpage"  > 
     
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



export default Playerpage; 