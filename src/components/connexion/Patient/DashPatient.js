import React,{useContext} from 'react'
import './DashPatient.css'
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import { useHistory } from 'react-router';
import {
    //Card,
    Button,
  } from "react-bootstrap";
import { AuthContext } from '../../../Context/AuthContext/AuthContex'
import { logout } from '../../../Context/AuthContext/AuthAction'
export default function DashPatient() {
    const {dispatch} = useContext(AuthContext)

    const history =useHistory()
    function Deconnexion(){
       dispatch(logout())
        history.push("/")
      
    }
    return (
        <div>
            <div className="Header__dash">
                <div className="title">
                   <h1 style={{textAlign:"center",color:"white"}}>COVID-19 TEST</h1>
                </div>

            </div>
            <div className="Body__Dash">
                <div>
                   <div className="First__Butt" onClick={() => history.push("addNewTest")} >
                   <button class="button button3">
                        <div><AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon></div>
                        <div>New </div>
                        <div>Test</div>
                   </button>
                   </div>
                    <div className="Second__Butt">
                    <button class="button button2">
                        <div>
                        <AccountCircleSharpIcon></AccountCircleSharpIcon>
                        </div>
                        <div>Edit </div>
                        <div>Profile</div>
                    </button>
                  </div>
                </div>
                <div>
                    <div className="First__Butt" onClick={() => history.push("printAttes")}>
                    <button class="button button3">
                        <div>
                            <AssessmentOutlinedIcon></AssessmentOutlinedIcon>
                        </div>
                        <div>Your </div>
                        <div>Test</div>
                    </button>
                </div>
                    <div className="Second__Butt">
                    <button class="button button2">
                         <div>
                             <LockSharpIcon></LockSharpIcon>
                         </div>
                        <div>Privacy </div>
                        <div>details</div>
                    </button>
                   </div>
                </div>


            </div>
            <div  style={{textAlign:"center",color:"black",fontSize:"1.9em"}}>
                <div>
                    All data recorded is anonymised .Using
                </div>
                <div>
                   this appication helps delay the spread 
                </div>
                <div>
                   of coronavirus
                </div>
                <Button
                className="btn1"
                onClick={Deconnexion}
              >
                Deconnexion
              </Button>



            </div>
        </div>
    )
}
