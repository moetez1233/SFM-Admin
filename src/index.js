import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Connexion from "./components/connexion/connexion";
import App from "./App";
//import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from "../src/components/connexion/AddForm";
import StepContext from "./StepContext";
import ".././node_modules/bootstrap/dist/css/bootstrap.css"
import { AuthContextProvider } from "./Context/AuthContext/AuthContex";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);
