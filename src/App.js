import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Connexion from "./components/connexion/connexion";
import Dashe from "./components/dashe";

import InformationUser from "./components/information";
import Login from "./components/covidTest/LogIn/logIn";
import AddAdmin from "./components/covidTest/dashTest/pages/AddAdmin/addAdmin";
import AddPatient from "./components/covidTest/dashTest/pages/AddPatient/addPatient";
import PatientListes from "./components/covidTest/dashTest/pages/PatientListes/patientListes";
import StatiqTest from "./components/covidTest/dashTest/pages/StatiqTest/statiqTest";
import AddPat from "./components/connexion/AddPat";
import ResultTEst from "./components/connexion/resultTEst";
import LoginPatient from "./components/connexion/LoginPatient";
import PrintAttest from "./components/connexion/printAttest";
import DashPatient from "./components/connexion/Patient/DashPatient"
import AddNewTest from './components/connexion/Patient/AddNewTest'
import Travile from './components/connexion/Patient/Travile'
import { Stepper, StepLabel, Step } from "@material-ui/core";
import Attestation from './components/connexion/Attestation'
import { AuthContext } from "./Context/AuthContext/AuthContex";

function App() {
  const {user} = useContext(AuthContext)
  
 
  return (
    <>
      <Router>
        <Switch>
       
          
           {/* ======================= Routes Patient ======================= */}
     
           {user ? (<>
           
           <Redirect to="/"></Redirect>
            <Route exact path="/">
            
            <DashPatient> </DashPatient>
          </Route>
             
          <Route path="/addNewTest">
            
            <AddNewTest> </AddNewTest>
          </Route>
          <Route path="/travel">
             <Travile></Travile>
          </Route>
          <Route path="/Attestation">
              <Attestation></Attestation>
          </Route>
          <Route  path="/resultTest">
            
            <ResultTEst> </ResultTEst>
          </Route>
       
          <Route  path="/printAttes">
            
            <PrintAttest> </PrintAttest>
          </Route>
           </>):(<>
            <Route exact path="/"><Dashe> </Dashe></Route>
            <Route  path="/login">
            <Login> </Login>
          </Route>
          <Route  path="/Connexion">
            <Connexion> </Connexion>
          </Route>
          <Route  path="/information">
            <InformationUser> </InformationUser>
          </Route>
        
          <Route  path="/loginPatient">
            <LoginPatient> </LoginPatient>
          </Route>
          <Route  path="/SignUpPatient">
            <AddPat> </AddPat>
          </Route>
           {/* =======================   Routes Testers ======================= */}
      <Route path="/addAdmin">
            
            <AddAdmin> </AddAdmin>
          </Route>
          <Route path="/addPatient">
            
            <AddPatient> </AddPatient>
          </Route>

          <Route path="/listePatient">
            
            <PatientListes> </PatientListes>
          </Route>
          <Route path="/StatiqTest">
            
            <StatiqTest> </StatiqTest>
          </Route>

{/* ======================= end  Routes Testers ======================= */}
           </>)}
          
    {/* ======================= end  Routes Patient ======================= */}

   

      

        
      
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
