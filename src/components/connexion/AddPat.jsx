import React from "react";
import StepContext from "../../StepContext";
import FormStep from "../formStep";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import  CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
const useStyles =makeStyles({
  root:{
    minWidth:275,
    maxWidth:500,
    marginTop:20,
    marginLeft:"auto",
    marginRight:"auto",
  }
})
export default function AddPat() {
  const classes=useStyles()
  const history = useHistory();
  const HomePage = () => {
    history.push("/");
  };
  return (
    <>
    <Card className={classes.root}>
      <CardContent>
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
      </CardContent>
    </Card>
   </>
  );
}
