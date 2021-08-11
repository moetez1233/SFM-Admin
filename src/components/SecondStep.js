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
export default function SecondStep() {
    const {
        setStep,
        userData,
        setUserData
    } = useContext(multistepContext)
    return ( <
        >
        <
        div className = "allStep" >
        <
        div >
        <
        TextField label = "email"
        className = "txtfild"
        value = {
            userData['email']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "email": e.target.value
            })
        }

        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        TextField label = "password"
        className = "txtfild"
        type = "password"
        value = {
            userData['password']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "password": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        TextField label = "Cin"
        className = "txtfild"
        value = {
            userData['Cin']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "Cin": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        Button variant = "contained"
        color = "secondary"
        onClick = {
            () => setStep(1)
        } > back < /Button> <
        Button variant = "contained"
        color = "primary"
        onClick = {
            () => setStep(3)
        } > Next < /Button> < /
        div >

        <
        /div>


        <
        />
    )
}