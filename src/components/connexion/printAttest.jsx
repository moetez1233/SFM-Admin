import React from "react";
import ReactToPrint from "react-to-print";
import ResultTEst from "./resultTEst";
import Attestation from './Attestation'
//import './printAttest.scss'
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import  Card  from "@material-ui/core/Card";
export default class PrintAttest extends React.PureComponent {

   
   
  render() {

    return (
      <div>
     
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div> </div>
          </Grid>
          <Grid item xs={7}>
            
            <Attestation ref={(el) => (this.componentRef = el)} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
              <div></div>
              </Grid>
            <Grid item xs={7}>
                <div className="printAt">

                  <ReactToPrint
                    trigger={() => {
                      // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                       // to the root node of the returned component as it will be overwritten.
                       return(
                        <Card style={{border:"none",minWidth:"275",maxWidth:"800",marginLeft:"auto",marginRight:"auto",marginTop:"15"}} variant="outlined">
                        <CardContent style={{border:"none"}}>
                           <div style={{flexGrow:"1"}}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} sm={6}><a href="/">Dashbord</a></Grid>
                                <Grid xs={6} sm={6}> <div> <a href="#"> print your attestation </a><PrintIcon></PrintIcon></div></Grid>
                                
                            </Grid>
                            </div>
                        </CardContent>
                      </Card>
                       ) 
                        }}
                    content={() => this.componentRef}
                    />
                </div>
            </Grid>
        </Grid>
 
      </div>
    );
  }
}
