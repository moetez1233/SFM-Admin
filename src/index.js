import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connexion from './components/connexion/connexion';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from '../src/components/connexion/AddForm'
import StepContext from './StepContext'
ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode> ,
    document.getElementById('root')
);