import React, { useContext } from "react";
import { multistepContext } from "../StepContext";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
export default function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  return (
    <>
      <div className="allStep">
        <div>
          <TextField
            label="email"
            className="txtfild"
            value={userData["email"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
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
            label="password"
            className="txtfild"
            type="password"
            value={userData["identifier"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                identifier: e.target.value,
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
            label="Age"
            className="txtfild"
            value={userData["age"]}
            onChange={(e) =>
              setUserData({
                ...userData,
                age: e.target.value,
              })
            }
            margin="normal"
            variant="outlined"
            color="secondary"
          >
            
          </TextField>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setStep(1)}
          >
            
            back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(3)}
          >
            
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
