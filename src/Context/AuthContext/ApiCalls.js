import {useContext} from 'react'
import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthAction"
import { AuthContext } from "./AuthContex"

export const Login = async (user,dispatch) =>{
    dispatch(loginStart())
    try{
        await axios.post('http://localhost:3000/api/auth',user).then((res)=>{
            dispatch(loginSuccess(res.data))
            
            console.log("sucess");
        }).catch((err)=>{
            console.log(err.response.data);

        })
        

    }catch(err){
        dispatch(loginFailure())
    }
}