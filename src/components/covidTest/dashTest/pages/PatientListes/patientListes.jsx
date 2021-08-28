import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavSide from "../../components/NavSide";

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
export default function PatientListes() {
  const [clicked, setClicked] = useState(false);
  const [clickedPatient, setClickedPatient] = useState([]);
  const [singleSelections, setSingleSelections] = useState();
  const [text, setText] = useState("");
  const [suggestions, setsuggestion] = useState([]);
  const [serchAuto, setserchAuto] = useState(false);

  const [patiens, setpatiens] = useState([
    {
      id: "uuidv1",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv2",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Ali",
      email: "maddouriAli@enetcom.u-sfax.tn",
      lastname: "aaaa",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv3",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Mohamed",
      email: "maddouriMohamed@enetcom.u-sfax.tn",
      lastname: "a12",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv4",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Morad",
      email: "maddouriMorad@enetcom.u-sfax.tn",
      lastname: "aaaa",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv5",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Jhon",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv6",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Patient c",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv7",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Patient D",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv8",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Patient X",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv9",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv10",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv11",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv12",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv13",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
    {
      id: "uuidv14",
      Centredetest: "ariana ",
      Cin: "09939442",
      ContactNumber: "+21655611346",
      Country: "Tunisia",
      Firstname: "Moetez",
      email: "maddourimoetez@enetcom.u-sfax.tn",
      lastname: "maddouri",
      password: "Q4@h5w6389r!JJ3",
      time: "Tue Aug 10 2021 21: 00: 00 GMT + 0200(heure d’ été d’ Europe centrale)",
      ville: "Ariana",
    },
  ]);
  const location = useLocation();
  //console.log(location.sidebar)
  const inputEl = useRef(null);
  const onChangeHandle = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = patiens.filter((patien) => {
        const Regex = new RegExp(`${text}`, "gi");
        return patien.Firstname.match(Regex);
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
      setText(pa.Firstname);
      setClicked(true);
    } catch {}
  }

  function autoclicked() {
    // alert(inputEl.current.value)
    alert("hello");
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
                              
                              <li> {patien.Firstname} </li>
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
                              
                              <li> {sugges.Firstname} </li>
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
                            
                            {clickedPatient.Firstname} {clickedPatient.lastname}
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
                            
                            {clickedPatient.ContactNumber}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Country: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.Country}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> ville: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.ville}
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> Centre de test: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.Centredetest}
                          </Grid>
                          <Grid item xs={2}>
                            <EditIcon> </EditIcon>
                          </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div>
                              
                              <h6> temp de RDV: </h6>
                            </div>
                          </Grid>
                          <Grid item xs={7}>
                            
                            {clickedPatient.time}
                          </Grid>
                          <Grid item xs={2}>
                            
                            <UpdateIcon> </UpdateIcon>
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
