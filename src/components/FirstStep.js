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

export default function FirstStep() {
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
        TextField className = "txtfild"
        label = "Firstname"
        value = {
            userData['Firstname']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "Firstname": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        TextField label = "Last name"
        className = "txtfild"
        value = {
            userData['lastname']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "lastname": e.target.value
            })
        }
        margin = "normal"
        variant = "outlined"
        color = "secondary" > < /TextField>

        <
        /div> <
        div >
        <
        TextField label = "Contact Number"
        className = "txtfild"
        value = {
            userData['ContactNumber']
        }
        onChange = {
            (e) => setUserData({
                ...userData,
                "ContactNumber": e.target.value
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
        color = "primary"
        onClick = {
            () => setStep(2)
        } > Next < /Button> < /
        div >

        <
        /div>

        <
        />
    )
}