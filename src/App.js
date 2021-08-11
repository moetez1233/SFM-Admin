import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Connexion from './components/connexion/connexion';
import Dashe from './components/dashe'

import InformationUser from './components/information'
import Login from './components/covidTest/LogIn/logIn'
import AddAdmin from './components/covidTest/dashTest/pages/AddAdmin/addAdmin'
import AddPatient from './components/covidTest/dashTest/pages/AddPatient/addPatient'
import PatientListes from './components/covidTest/dashTest/pages/PatientListes/patientListes'
import StatiqTest from './components/covidTest/dashTest/pages/StatiqTest/statiqTest'
import AddPat from './components/connexion/AddPat'
import ResultTEst from './components/connexion/resultTEst'
import LoginPatient from './components/connexion/LoginPatient'
import PrintAttest from './components/connexion/printAttest'


import {
    Stepper,
    StepLabel,
    Step
} from '@material-ui/core';


function App() {

    return ( < >
        <
        Router >





        <
        Switch >
        <
        Route exact path = "/" > < Dashe > < /Dashe></Route >

        <
        Route exact path = "/Connexion" > < Connexion > < /Connexion></Route >
        <
        Route exact path = "/information" > < InformationUser > < /InformationUser></Route >
        <
        Route exact path = "/login" > < Login > < /Login></Route >
        <
        Route exact path = "/loginPatient" > < LoginPatient > < /LoginPatient></Route >
        <
        Route exact path = "/resultTest" > < ResultTEst > < /ResultTEst></Route >
        <
        Route exact path = "/printAttes" > < PrintAttest > < /PrintAttest></Route >
        <
        Route exact path = "/SignUpPatient" > < AddPat > < /AddPat></Route >

        <
        Route path = "/addAdmin" > < AddAdmin > < /AddAdmin></Route >
        <
        Route path = "/addPatient" > < AddPatient > < /AddPatient></Route >

        <
        Route path = "/listePatient" > < PatientListes > < /PatientListes></Route >
        <
        Route path = "/StatiqTest" > < StatiqTest > < /StatiqTest></Route >








        <
        /
        Switch > <
        /Router>

        <
        / >

    );
}

export default App;