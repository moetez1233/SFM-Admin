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
import QRCode from "react-qr-code";
export default function Endstep() {
    const {
        setStep,
        userData,
        setUserData,
        submitData
    } = useContext(multistepContext)
    const datacode = () => {
        return "name :  " + userData.Firstname + "\n last name : " + userData.lastname + "\n Contact number : " + userData.ContactNumber + "\n email: " + userData.email + "\n cin : " + userData.Cin + "\n Country : " + userData.Country + "\n ville : " + userData.ville + "\n Centre de test : " + userData.Centredetest + "\n time : " + userData.time
    }


    return ( <
        >


        <
        h5 > voila votre Qr Code < /h5> <
        QRCode id = "abc"
        value = {
            datacode()

        } > < /QRCode>

        <
        />
    )
}