import React from "react";
import ReactToPrint from "react-to-print";
import ResultTEst from "./resultTEst";
import { Grid } from "@material-ui/core";
import './printAttest.scss'
export default class PrintAttest extends React.PureComponent {

   
   
  render() {

    return (
      <div>
     
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div> </div>
          </Grid>
          <Grid item xs={7}>
            
            <ResultTEst ref={(el) => (this.componentRef = el)} />
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
                       return <a href="#"> print your attestation </a>;
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
