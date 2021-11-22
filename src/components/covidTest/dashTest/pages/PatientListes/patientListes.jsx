import React, { useState, useRef,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavSide from "../../components/NavSide";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./patientListe.scss";
import Grid from "@material-ui/core/Grid";
import { Form, Button, Card } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import UpdateIcon from "@material-ui/icons/Update";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
export default function PatientListes() {
  const [clicked, setClicked] = useState(false);
  const [clickedPatient, setClickedPatient] = useState([]);
  const [singleSelections, setSingleSelections] = useState();
  const [text, setText] = useState("");
  const [suggestions, setsuggestion] = useState([]);
  const [serchAuto, setserchAuto] = useState(false);
  const [ListePast, setListePast] = useState();
  const [patiens, setpatiens] = useState([
    {
      "id":1,
      "firstname" : "Mohamed",
      "lastname" : "Moetez",
      "birthdate" : "2021-02-17T02:11:22+00:00",
      "nationality" : "tunisian",
      "email" : "mohamed.yassine@gmail.com",
      "address" : "gabes - tunisie",
      "age" : 23,
      "gender" : "male",
      "identifier" : "11111111",
      "gsm" : "22222222"
  },
  {
    "id":2,
    "firstname" : "Mohamed",
    "lastname" : "Yassine",
    "birthdate" : "2021-02-17T02:11:22+00:00",
    "nationality" : "tunisian",
    "email" : "mohamed.yassine@gmail.com",
    "address" : "gabes - tunisie",
    "age" : 23,
    "gender" : "male",
    "identifier" : "11111111",
    "gsm" : "22222222"
},{
  "id":3,
  "firstname" : "Mohamed",
  "lastname" : "Brahim",
  "birthdate" : "2021-02-17T02:11:22+00:00",
  "nationality" : "tunisian",
  "email" : "mohamed.yassine@gmail.com",
  "address" : "gabes - tunisie",
  "age" : 23,
  "gender" : "male",
  "identifier" : "11111111",
  "gsm" : "22222222"
},{
  "id":4,
  "firstname" : "Mohamed",
  "lastname" : "Ala",
  "birthdate" : "2021-02-17T02:11:22+00:00",
  "nationality" : "tunisian",
  "email" : "mohamed.yassine@gmail.com",
  "address" : "gabes - tunisie",
  "age" : 23,
  "gender" : "male",
  "identifier" : "11111111",
  "gsm" : "22222222"
},{
  "id":5,
  "firstname" : "Mohamed",
  "lastname" : "haythem",
  "birthdate" : "2021-02-17T02:11:22+00:00",
  "nationality" : "tunisian",
  "email" : "mohamed.yassine@gmail.com",
  "address" : "gabes - tunisie",
  "age" : 23,
  "gender" : "male",
  "identifier" : "11111111",
  "gsm" : "22222222"
},{
  "id":6,
  "firstname" : "Mohamed",
  "lastname" : "Wael",
  "birthdate" : "2021-02-17T02:11:22+00:00",
  "nationality" : "tunisian",
  "email" : "mohamed.yassine@gmail.com",
  "address" : "gabes - tunisie",
  "age" : 23,
  "gender" : "male",
  "identifier" : "11111111",
  "gsm" : "22222222"
},

  ]);
 
  const location = useLocation();
  //console.log(location.sidebar)
  const inputEl = useRef(null);
  /*useEffect(async () => {
    const getEmployeesListe = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/api/pati`)
        console.log(result.data)
        setpatiens(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getEmployeesListe()
  },{})*/
  console.log("liste patient : ",patiens);
  const onChangeHandle = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = patiens.filter((patien) => {
        const Regex = new RegExp(`${text}`, "gi");
        return patien.lastname.match(Regex);
      });
    }
    console.log(matches);
    setsuggestion(matches);
    setserchAuto(!serchAuto);
    setText(text);
  };

  function patientclicked(i) {
    try {
      const pa = patiens.find((m) => m.id === i);
      setClickedPatient(pa);
      setText(pa.lastname);
      setClicked(true);
    } catch {}
  }


  return (
    <div>
      <NavSide> </NavSide>
      <div className="patientpage">
        
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div> </div>
          </Grid>
          <Grid item xs={7}>
            
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                
                <h6> Chercher un patient </h6>
              </Form.Label>
              <Form.Control
                type="text"
                value={text}
                placeholder="tapez le nom du patient"
                onChange={(e) => onChangeHandle(e.target.value)}
              />
            </Form.Group>
              
       
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            
          </Grid>
          <Grid item xs={7}>
            
            <div style={{ marginBottom: "5px" }}> </div>
            <Grid container spacing={3}>
              <Grid item xs={4} className="boxsearch">
                
                <Card>
                  <Card.Body>
                    
                    <nav>
                      
                   
                        
 {!serchAuto ? (
                        <ul>
                          {patiens.map((patien, i) => (
                            <div
                              index={i}
                              onClick={() => patientclicked(patien.id)}
                            >
                              
                              <li> {patien.lastname} </li>
                            </div>
                          ))}
                        </ul>
                      ) : (
                        <ul>
                          {suggestions.map((sugges, i) => (
                            <div
                              index={i}
                              onClick={() => patientclicked(sugges.id)}
                            >
                              
                              <li> {sugges.lastname} </li>
                            </div>
                          ))}
                        </ul>
                      )}
                     
                      
                    </nav>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid item xs={8} className="boxsearch">
                
                <Card>
                  <Card.Body className="infoPatient">
                    
                    {clicked ? (
                      <div>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> nom: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.firstname} {clickedPatient.lastname}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> email: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.email}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Contact: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.gsm}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Country: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.nationality}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> ville: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.address}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Centre de test: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.address}
                          </Grid>
                          <Grid item xs={2}>
                            <EditIcon> </EditIcon>
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Age </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.age}
                          </Grid>
                          
                        </Grid>
                      </div>
                    ) : (
                      <div>
                        
                        Click sur le patient que tu veux chercher pour voir leur
                        information
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div> </div>
      </div>
    </div>
  );
}
