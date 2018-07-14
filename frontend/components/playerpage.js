import React from 'react';
import Animations from './animations'
<<<<<<< HEAD
import Animations2 from './animations2';
import { Button, Icon } from 'semantic-ui-react'
=======
import Animations2 from './animations2'
>>>>>>> 698888b18630740440dd0ac14726d6a5c80ba476

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
<<<<<<< HEAD
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
=======
           <Animations2/>
            <div id="sidebar">
                <div >
                  <div> Artist Name:  </div> <br/>

                  <div>  Song Name: </div>
                </div>
              </div>
            </div>
      </div>
>>>>>>> 698888b18630740440dd0ac14726d6a5c80ba476

    )
  }
}



export default Playerpage;
