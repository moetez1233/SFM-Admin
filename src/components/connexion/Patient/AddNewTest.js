import React from 'react'
import './AddNew__Test.css'
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router';

export default function AddNewTest() {
  const history =useHistory()
    const [state, setState] = React.useState({
        Fever: false,
        cough: false,
        fatigue: false,
        Diarrhea:false,
        Unexplained_Bleeding:false,
        Headache:false,
        Headache:false,
     
        Abdobinal_Pain:false,
        Vomiting:false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      function SaveAdd(){
          console.log(state)
      }
    return (
        <div>
           <div className="Header__Test">
                <div className="title">
                   <h1 style={{textAlign:"center",color:"black"}}>Add New Test</h1>
                </div>
            </div>
<Container style={{marginTop:"10px"}}>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <h4>Fever (38°)</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox"  checked={state.Fever} onChange={handleChange} name="Fever" />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
    
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <h4>Cough</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.cough} onChange={handleChange} name="cough"   />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
 
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <h4>Fatigue</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Fatigue} onChange={handleChange} name="Fatigue"   />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
 
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <h4>Diarrhea</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3} >
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Diarrhea} onChange={handleChange} name="Diarrhea"  />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
 
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
      <h4>Unexplained Bleeding</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Unexplained_Bleeding} onChange={handleChange} name="Unexplained Bleeding"  />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
    
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <h4>Headache</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Headache} onChange={handleChange} name="Headache"  />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
    
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <h4>Vomiting</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Vomiting} onChange={handleChange} name="Vomiting" />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
    
  </Row>
  <Row style={{marginBottom:"5px"}}>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}  ></Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <h4>Abdobinal Pain</h4>
    </Col>
    <Col xs={4} sm={12} md={4} lg={3} xxl={3}>
    <Grid className="Body__TestSwith" spacing={5}>
                         <Grid item>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><h5>Yes</h5></label>
                       </Grid>
                     <Grid item>
                             <div class="form-check form-switch">
                                   <input class="form-check-input" type="checkbox" checked={state.Abdobinal_Pain} onChange={handleChange} name="Abdobinal_Pain" />
                            </div>
                    </Grid>
                       <label class="form-check-label" for="flexSwitchCheckDefault"><h5>No</h5></label>
                     </Grid>
    </Col>
    
  </Row>
</Container>
<div className="footer__Test">
         <button class="btn__save" onClick={SaveAdd}>
                        <div><AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon> <span>Save Test</span> </div>
         </button>
         <div>
         <button class="btn__Retour" onClick={() => history.push("dashPatiente")}>
                        <div><ArrowBackIosIcon></ArrowBackIosIcon> <span>Retour</span> </div>
         </button>

         </div>
        
</div>
           
              
              
               


            
          </div>
            

  
  

               
      
    )
}
