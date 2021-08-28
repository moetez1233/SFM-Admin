import React, { useState } from 'react'
import './LogIn.scss'
import imgLog from './loginpng.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

export default function Login() {
    const [dataAdmin, setdataAdmin] = useState({})

    const history = useHistory()
    const HomePage = () => {
        history.push('/')
    }
    const onSubmit = () => {
        console.log(dataAdmin)
        history.push('/StatiqTest')
    }

    return ( <
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
            { fontSize: '1.5' } } > Home < /span>{' '} <
        /Button>{' '} <
        /div>{' '} <
        img src = { imgLog }
        width = '100%' / >
        <
        /div>{' '} <
        Form.Group className = 'mb-3'
        controlId = 'formBasicEmail' >
        <
        Form.Label > { ' ' } <
        h6 > Email address < /h6>{' '} <
        /Form.Label>{' '} <
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
        />{' '} <
        /Form.Group>{' '} <
        Form.Group className = 'mb-3'
        controlId = 'formBasicPassword' >
        <
        Form.Label > { ' ' } <
        h6 > Password < /h6>{' '} <
        /Form.Label>{' '} <
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
        />{' '} <
        Button variant = 'primary'
        type = 'submit'
        style = {
            {
                marginTop: '5px'
            }
        }
        onClick = { onSubmit } >
        Submit { ' ' } <
        /Button>{' '} <
        /Form.Group>{' '} <
        /div>
    )
}