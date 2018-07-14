import React from 'react';
import Animations from './animations';
import Animations2 from './animations2';
import { Button, Icon } from 'semantic-ui-react';


class Playerpage extends React.Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
      <div className="emotify"> 
      <h1>EMOTIFY</h1>
      <div className="playerpage">
           <div className="cart" >
           <Animations2/>
              <div id="sidebar">
                <iframe src="https://open.spotify.com/embed?uri=spotify:user:fkigawa:playlist:5kw7HlLGZUfzwPcV2YO44i" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
        </div>
    </div>
    </div>

    )
  }
}


export default Playerpage;
