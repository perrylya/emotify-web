import React from 'react';
import PhotoPage from './photopage';



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="emotify">
                <div className="header"> 
                <h1>EMOTIFY</h1>
                </div> 
               
                <PhotoPage />
            </div>
        );
    }
}




export default App;