import React, { useContext } from "react";
import { multistepContext } from "../StepContext";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
import axios from "axios";
import DateTime from "./dateTime";
export default function TherdStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multistepContext);

  function alldata() {
    console.log(userData);
    
    
  }
  return (
    <>
      <div className="allStep">
        <div>
          <TextField
            label="nationality"
            className="txtfild1"
            value={userData["nationality"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                nationality: e.target.value,
              })
            }
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            
          </TextField>

          <TextField
            label="address"
            style={{
              marginLeft: "1%",
            }}
            className="txtfild1"
            value={userData["address"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                address: e.target.value,
              })
            }
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            
          </TextField>
        </div>
        <div>
          <TextField
            label="Centre de test"
            className="txtfild"
            /*value={userData["Centredetest"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                Centredetest: e.target.value,
              })
            }*/
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            
          </TextField>
        </div>
        <div>
          <DateTime> </DateTime>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setStep(2)}
          >
            
            back
          </Button>
          <Button variant="contained" color="primary" onClick={submitData}>
            
            Enregister
          </Button>
        </div>
      </div>
    </>
  );
}
