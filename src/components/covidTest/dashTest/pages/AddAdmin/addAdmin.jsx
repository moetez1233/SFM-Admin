import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import NavSide from '../../components/NavSide'
import './addAdmin.scss'
import imgLog from './loginpng.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom'

import { TextField } from '@material-ui/core'
import { Form, Button } from 'react-bootstrap'
export default function AddAdmin() {
    const [dataAdmin, setdataAdmin] = useState({})

    const location = useLocation()
    const history = useHistory()
    const HomePage = () => {
        history.push('/')
    }
    const onSubmit = () => {
        console.log(dataAdmin)
    }

    //const [sidebare, setSidebare] = useState(false);
    //if (location.sidebar = "undefined") { setSidebare(false) } else { setSidebare(true) }
    // console.log(sidebare);
    return ( <
        div >
        <
        NavSide > < /NavSide>{' '} <
        div className = 'addAdminpage' >
        <
        div className = 'LoginTest' >
        <
        div className = 'imgcontainer' >
        <
        div className = 'leftArrow' >
        <
        Button variant = 'light'
        onClick = { HomePage } > { ' ' } <
        ArrowBackIosIcon > < /ArrowBackIosIcon>{' '} <
        span style = {
            { fontSize: '1.5' }
        } > Home < /span>{' '} < /
        Button > { ' ' } <
        /div>{' '} <
        img src = { imgLog }
        width = '100%' / >
        <
        /div>

        <
        Form.Group className = 'mb-3'
        controlId = 'formBasicFirstName' >
        <
        Form.Label > { ' ' } <
        h6 > Name < /h6>{' '} < /
        Form.Label > { ' ' } <
        Form.Control type = 'text'
        placeholder = 'Enter name'
        value = { dataAdmin['name'] }
        onChange = {
            e =>
            setdataAdmin({
                ...dataAdmin,
                name: e.target.value
            })
        }
        />{' '}

        <
        /Form.Group>

        <
        Form.Group className = 'mb-3'
        controlId = 'formBasicEmail' >
        <
        Form.Label > { ' ' } <
        h6 > Email address < /h6>{' '} < /
        Form.Label > { ' ' } <
        Form.Control type = 'email'
        placeholder = 'Enter email'
        value = { dataAdmin['email'] }
        onChange = {
            e =>
            setdataAdmin({
                ...dataAdmin,
                email: e.target.value
            })
        }
        />{' '}

        <
        /Form.Group>

        <
        Form.Group className = 'mb-3'
        controlId = 'formBasicPassword' >
        <
        Form.Label > { ' ' } <
        h6 > Password < /h6>{' '} < /
        Form.Label > { ' ' } <
        Form.Control type = 'password'
        placeholder = 'Password'
        value = { dataAdmin['password'] }
        onChange = {
            e =>
            setdataAdmin({
                ...dataAdmin,
                password: e.target.value
            })
        }
        /> <
        Button variant = 'primary'
        type = 'submit'
        style = {
            {
                marginTop: '5px'
            }
        }
        onClick = { onSubmit } >
        Submit { ' ' } <
        /Button>{' '} < /
        Form.Group > <
        /div> < /
        div > <
        /div>
    )
}