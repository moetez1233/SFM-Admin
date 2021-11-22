import React, { Component, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import TherdStep from "./ThirdStep";
import Endstep from "./endStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multistepContext } from "../StepContext";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import './formStep.css'
const useStules =makeStyles({
  root:{
    width: "90%",  
    marginLeft: "-40%",
    '@media(maxWidth:406)':{
      width:30,
      color:"red"
    }

  }
})
export default function FormStep() {
  const { currentStep, finalData } = useContext(multistepContext);
const classes =useStules()
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep> </FirstStep>;
      case 2:
        return <SecondStep> </SecondStep>;
      case 3:
        return <TherdStep> </TherdStep>;
      case 4:
        return <Endstep> </Endstep>;
    }
  }
  return (
    <>
  
         

     
        <Stepper
          style={{
            marginLeft:"-100px",
          width:"50px"
          }}
         
            activeStep={currentStep - 1}
            orientation="horizontal"
            >
              
        
          <Step>
            <StepLabel> </StepLabel>
          </Step>

          <Step>
            <StepLabel> </StepLabel>
          </Step>
          <Step>
            <StepLabel> </StepLabel>
          </Step>

          <Step>
            <StepLabel> </StepLabel>
          </Step>
        </Stepper>
   
          

      {showStep(currentStep)}
    </>
  );
}
