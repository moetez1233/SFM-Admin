import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavSide from "../../components/NavSide";

import "./addPatient.scss";
import Grid from "@material-ui/core/Grid";
import StepContext from "../../../../../StepContext";
import FormStep from "../../../../formStep";
export default function AddPatient() {
  const location = useLocation();
  console.log(location.sidebar);
  return (
    <div>
      <NavSide> </NavSide>
      <div className="Addpatientpage">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div> </div>
          </Grid>
          <Grid item xs={7}>
            
            <div>
              <StepContext>
                <FormStep> </FormStep>
              </StepContext>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
