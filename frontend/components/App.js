import React from 'react';
import PhotoPage from './photopage'


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className ='emotify' >
                <h1 >EMOTIFY</h1>
                <div className='photopage'>
                    <PhotoPage /> 
                </div>
            </div>
        );
    }
}

export default App;
