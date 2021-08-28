import React from "react";
import StepContext from "../../StepContext";
import FormStep from "../formStep";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "react-bootstrap";

export default function AddPat() {
  const history = useHistory();
  const HomePage = () => {
    history.push("/");
  };
  return (
    <div style={{ marginTop: "5%" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <div> </div>
        </Grid>
        <Grid item xs={8}>
          
          <div className="ConnexBoxPatient">
            <Button
              style={{ marginTop: "15px" }}
              variant="light"
              onClick={HomePage}
            >
              
              <ArrowBackIosIcon> </ArrowBackIosIcon>
              <span style={{ fontSize: "1.5" }}> Home </span>
            </Button>
            <StepContext>
              <FormStep> </FormStep>
            </StepContext>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
