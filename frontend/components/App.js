import React from 'react';
<<<<<<< HEAD
import PhotoPage from './photopage'

=======
import PhotoPage from './photopage';
>>>>>>> b3ca662c7214f08a6c127c3a59b6ae66ed2455e8

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
<<<<<<< HEAD
            <div className ='emotify' >
                <h1 >EMOTIFY</h1>
                <div className='photopage'>
                    <PhotoPage /> 
                </div>
=======
            <div className="home">
                <h1>EMOTIFY</h1>
                <p>
                    This is the App component.
                </p>
                <PhotoPage />
>>>>>>> b3ca662c7214f08a6c127c3a59b6ae66ed2455e8
            </div>
        );
    }
}

export default App;
