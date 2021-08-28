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
export default function FormStep() {
  const { currentStep, finalData } = useContext(multistepContext);

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
      <Grid container spacing={1}>
        <Grid item sm={4} xs={2} md={12}>
         

      <div className="centre-Stepper">
        <Stepper
          className="steppercla"
          style={{
              width: "90%",
              
              marginLeft: "-5%",
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
      </div>
            </Grid>
           
          </Grid>

      {showStep(currentStep)}
    </>
  );
}
