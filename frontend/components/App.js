import React from 'react';
import PhotoPage from './photopage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <h1>EMOTIFY</h1>
                <p>
                    This is the App component.
                </p>
                <PhotoPage />
            </div>
        );
    }
}

export default App;
