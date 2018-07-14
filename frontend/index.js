import React from 'react';
import { render } from 'react-dom';
import './stylesheets/style.css';

import App from './components/App';
import Animations from './components/animations'


render(
    // <App />, 
    <Animations /> ,
    document.getElementById('root')
);
