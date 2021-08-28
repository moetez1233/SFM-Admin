import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Image from 'react-bootstrap/Image'
import "./resulttest.scss";
import imgLog from "./hostpital.png";
import imgQrCode from "./qrCode.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class ResultTEst  extends React.PureComponent {
//const location = useLocation();
//const patient = location.data
//console.log(patient.status);
//const sta =patient.status
render() {
    return (
      <>
        <div style={{ marginTop: "2%", marginLeft: "10%" }}>
        <Container maxWidth="sm">

          <Grid container spacing={3}>
            <Grid item xs={10} className="Patienttest">
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <div>
                    
                    <h4 style={{ paddingTop: "30px", color: "Navy" }}>
                     ali
                   
                      Central Hospital 
                    </h4>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  
                </Grid>
                <Grid item xs={5}>
                  
                  <img
                    src={imgLog}
                    width="50%"
                    style={{ marginLeft: "50%" }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  
                  <h4> CoviD - 19 PCR Test Result Attestation </h4>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Patient Name </div>
                </Grid>
                <Grid item xs={4}>
                  
                  <h6>ali</h6>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Birth Date </div>
                </Grid>
                <Grid item xs={4}>
                  
                  <h6> 12.03 .1980 </h6>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Type of Test </div>
                </Grid>
                <Grid item xs={6}>
                  
                  <h6> SARS - CoV - 2 PCR </h6>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Date of Test </div>
                </Grid>
                <Grid item xs={6}>
                  
                  <h6> 12.02 .2021 </h6>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Result of Test </div>
                </Grid>
                <Grid item xs={6}>
                  
                  <h6 style={{ color: "Lime" }}> Negative </h6>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div> Attestation issued by: </div>
                 
                </Grid>
                <Grid item xs={6} sm={6}>
                  
                  <h6> Ministry of Health </h6>
                  </Grid>
                  <div>
                      
                   

                      <Container>
                             <Row>
                                <Col xs={10} sm={10} md={10} lg={10} xxl={10}  >
                                <div
                    style={{
                       
                      
                      
                    }}
                  >
                    <div>
                      
                      This attestation is secured by the CERTUS technology
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        Its authenticity can be virified by scaning the QR code
                    </div>
                    <div>
                      <h6>Qr Code</h6>

                    </div>
                    
                  </div>


                                </Col>
                                <Col xs={10} sm={10} md={10} lg={10} xxl={10}>


                                <Image   src={imgQrCode} width="30%" className="responsive" />
                                </Col>
  
                               </Row>
                       </Container>
                 
                  </div>
             
              </Grid>
            </Grid>
          </Grid>
      </Container>
        </div>
      </>
    );
  }}

