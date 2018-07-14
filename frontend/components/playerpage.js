import React from 'react';
import Animations from './animations'
import Animations2 from './animations2';
import { Button, Icon } from 'semantic-ui-react'

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
  
                <div className="musicbar" > 
                  <h2> Artist Name: Pharrel Williams  </h2> 
                  <h2>  Song Name: Happy </h2> 
                </div> 
                <div>
                <Button.Group>
                  <Button labelPosition='left' icon='left chevron' content='Back' />
                  <Button icon='stop' content='Stop' />
                  <Button labelPosition='right' icon='right chevron' content='Forward' />
                </Button.Group>
                 </div>
            </div>
        </div> 
    </div> 

    )
  }
}



export default Playerpage; 