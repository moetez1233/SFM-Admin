import React, {
    useState,
    useContext
} from 'react';
import MomentUtils from '@date-io/moment'; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {
    multistepContext
} from '../StepContext';


function DateTime() {
    const {
        selectedDate,
        handleDateChange,
        userData,
        setUserData

    } = useContext(multistepContext)



    return ( <
        MuiPickersUtilsProvider utils = {
            MomentUtils
        } >

        <
        div >

        <
        DateTimePicker label = "Date"
        style = {
            {
                marginTop: '2%',
                width: "80%",
                marginBottom: '2%'

            }
        }
        inputVariant = "outlined"
        value = {
            selectedDate
        }
        onChange = {
            handleDateChange

        }

        /> < /
        div > <
        /
        MuiPickersUtilsProvider >

    );
}
export default DateTime;