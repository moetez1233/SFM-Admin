import React, {
    Component,
    useState
} from 'react';
import {
    useHistory,
    Link,
    Router
} from 'react-router-dom';
import FormStep from './components/formStep'
import InformationUser from './components/information'
/* =================== crud ============================= */
import axios from 'axios';
/* =================== crud ============================= */

export const multistepContext = React.createContext()
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setfinalData] = useState([])
    const [selectedDate, handleDateChange] = useState(new Date());
    const history = useHistory()


    function submitData() {

        //userData.time = selectedDate._d
        setfinalData(finalData => [...finalData, userData])
        console.log(userData);
        setStep(4)

        /*axios.post('http://localhost:8000/api/patients', userData)
             .then(res =>{
                console.log(res.data)
                setStep(4)
                setTimeout(() => {
                    history.push("/loginPatient")
                }, 3000);
             } );*/


        /* ===============================================================  crud =========================== */
        /* ========================= Get ============================== */
        /*axios.get(`http://localhost:3001/employees`)
            .then(res => {
                const employees = res.data;
                console.log({
                    employees
                });
            })*/
        /* ========================== end  crud ========================== */
        /* ==============================  Post ========================= */

        /* const studentObject = {
             name: userData.Firstname,
             position: userData.Country,
             office: userData.ville,
             salary: userData.Cin

         };
         axios.post('http://localhost:3001/employees', studentObject)
             .then(res => console.log(res.data));
              history.push("/information") // to go in information page
             */
        /* =============================== end Post ======================= */
        /* =============================================================== end crud =========================== */



        //setUserData('');



    }
    return ( <
        >
        <
        multistepContext.Provider value={
                {
                    currentStep,
                    setStep,
                    userData,
                    setUserData,
                    finalData,
                    setfinalData,
                    submitData,
                    selectedDate,
                    handleDateChange
                }
            } >
            <
        FormStep > < /FormStep> < /
        multistepContext.Provider > <
        />
                )
}
                export default StepContext;