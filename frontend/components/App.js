import React from 'react';
import PhotoPage from './photopage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="title">
            <h1>EMOTIFY</h1>
            <div className="emotify">
                <PhotoPage />
            </div>
          </div>
        );
    }
}

export default App;
