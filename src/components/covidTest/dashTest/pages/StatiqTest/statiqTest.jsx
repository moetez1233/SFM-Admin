import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import NavSide from '../../components/NavSide'

import './staiqTest.scss'
import Grid from '@material-ui/core/Grid'

export default function StatiqTest() {
    return ( <
        div >
        <
        NavSide > < /NavSide>{' '} <
        div className = 'patientpage' >
        <
        Grid container spacing = { 3 } >
        <
        Grid item xs = { 3 } >
        <
        div > < /div>{' '} < /
        Grid > { ' ' } <
        Grid item xs = { 7 } > { ' ' } <
        h1 > Statistiques Patient < /h1>{' '} < /
        Grid > { ' ' } <
        /Grid>


        <
        /div>{' '} < /
        div >
    )
}