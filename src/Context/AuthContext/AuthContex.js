import { createContext,useEffect,useReducer,useState } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE ={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:JSON.parse(localStorage.getItem("isFetching")) ||false,
    error:JSON.parse(localStorage.getItem("error")) ||false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const [coneecetSucc, setconeecetSucc] = useState(false)
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
        localStorage.setItem("isFetching",state.isFetching)
        localStorage.setItem("error",state.error)

    },[state.user])
    return(
        <AuthContext.Provider 
        value={{user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        coneecetSucc,
        setconeecetSucc,
        dispatch
        }}>
            
            {children}
            
            </AuthContext.Provider>
    )
}