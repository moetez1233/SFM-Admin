import React from 'react'
import {Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgLog from "./hostpital.png";
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image'
import imgQrCode from "./qrCode.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      maxWidth:800,
     marginLeft:"auto",
     marginRight:"auto",
     marginTop:15,
    },
    head:{
        display:'flex'

    },
    DataUser:{
        display:'flex',
        paddingLeft: theme.spacing(1),
    },
    evrydata:{
        marginLeft:"auto",
        marginRight:"auto"
    },
   
    title: {
      fontSize: 30,
    },
    pos: {
        marginRight:20,
      marginBottom: 12,
    },
    media: {
        height: 140,
      },
      Userdata:{
         color:"navy",
         fontSize:20
      }
  }));
export default function Attestation() {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root} variant="outlined">
      <CardContent>
          <div className={classes.head}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          <div>
          Central Hospital
          </div>
          <div>CoviD - 19 PCR Test Result Attestation</div>
        </Typography>
        <div style={{textAlign:"right"}}>
                  <img
                    src={imgLog}
                    width="50%"
                  />
        </div>
     
             
          </div>
          <div style={{flexGrow:"1"}}>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}> Patient Name </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                    <div>Moetez</div>
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}> Birth Date </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                 <h6> 12.03 .1980 </h6>
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}> Type of Test </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                 <h6> SARS - CoV - 2 PCR </h6>
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}>  Date of Test  </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                 <h6> 12.02 .2021 </h6>
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}>Result of Test </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                 <h6 style={{ color: "Lime" }}> Negative </h6>
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={5} sm={6}>
                 <div className={classes.Userdata}> Attestation issued by: </div>
                 </Grid>
                 <Grid item xs={5} sm={6}>
                 Ministry of Health
                 </Grid>
            </Grid>
            <Grid container spacing={3}>
                 <Grid item xs={12} sm={6}>
                 <div className={classes.Userdata}> This attestation is secured by the CERTUS technology </div>
                 <div className={classes.Userdata}>  Its authenticity can be virified by scaning the QR code </div>
                 </Grid>
                
                 <Grid item xs={12} sm={6}>
                 <div className={classes.Userdata}> <h6>Qr Code</h6> <Image   src={imgQrCode} width="30%" className="responsive" /> </div>
                 </Grid>
            </Grid>
            
         </div>
   
  
        
        
      </CardContent>
    
    </Card>
 
        </div>
    )
}
