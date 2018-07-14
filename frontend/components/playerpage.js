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
      <div className="playerpage" style={{background: `linear-gradient(to bottom, #FFB6C1, 	#F0E68C` }}>
           <div className="cart" >
           <Animations2/>
              <div id="sidebar">
                <iframe src="https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
        </div>
    </div>

    )
  }
}



export default Playerpage;
