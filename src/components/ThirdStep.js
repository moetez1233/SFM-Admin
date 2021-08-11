import React, {
    useContext
} from 'react';
import {
    multistepContext
} from '../StepContext';
import {
    TextField,
    Button
} from '@material-ui/core';
import './style.css';
import DateTime from './dateTime'
export default function TherdStep() {
    const {
        setStep,
        userData,
        setUserData,
        submitData
    } = useContext(multistepContext)

    function alldata() {
        console.log(userData);
    }
    return ( <
        >
        <
        div className = "allStep" >
        <
        div >
        <
        TextField label = "Country"
        className = "txtfild1"
        value = {
            userData['Country']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "Country": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>


        <
        TextField label = "ville"
        style = {
            {
                marginLeft: '1%'
            }
        }
        className = "txtfild1"
        value = {
            userData['ville']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "ville": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>



        <
        /div>  <
        div >
        <
        TextField label = "Centre de test"
        className = "txtfild"
        value = {
            userData['Centredetest']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "Centredetest": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        DateTime > < /DateTime>

        <
        Button variant = "contained"
        color = "secondary"
        onClick = {
            () => setStep(2)
        } > back < /Button>


        <
        Button variant = "contained"
        color = "primary"
        onClick = {
            submitData

        } > Enregister < /Button> < /
        div >


        <
        /div>


        <
        />
    )
}