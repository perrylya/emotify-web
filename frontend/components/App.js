import React from 'react';
import PhotoPage from './photopage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to React</h1>
                <p>
                    This is the App component.
                    <PhotoPage />
                </p>
            </div>
        );
    }
}

export default App;
