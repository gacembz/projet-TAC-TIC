
import { Routes,Route, useNavigate } from "react-router-dom";
import Navigation from "./Components/Navigation";

import Footer from "./Components/Footer";
import SujetListe from "./Components/SujetListe";
// import Login from "./Components/Login";
import Accuiel from "./Components/Accuiel";
import Addsujet from "./Components/Addsujet";
import Edit from "./Components/Edit";
import Deletesujet from "./Components/Deletesujet";
// import Register from "./Components/Register";
import "./App"
import UserProfile from "./Components/UserInterface/UserProfile"
import { Dashboard } from "@mui/icons-material";
import Test from "./Components/dashboard/Test"
import FinishAnswerPassword from "./authentifcation/FinishAnswerPassword";
import AnswerPassword from "./authentifcation/AnswerPassword";
import RestPassword from "./authentifcation/RestPassword";
import Home from "./authentifcation/Home";
import Login from "./authentifcation/Login";
import Register from "./authentifcation/Register";
import { toast } from "react-toastify";
import React, { Fragment, useState } from "react";
function App() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const submitRestPassword = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:9000/users?email=" + email);
    const content = await response.json();
    setUser(content.find((item) => item));
    if (user === "" || user === null || user === undefined) {
      toast.error("Please Type Your Email Agin", "Error");
      return;
    } else if( email === user.email ) {
      toast.success("Please Answer The Question", "Success");
      navigate("/answerpassword");
      return;
    } else{
      toast.error("This user does not exist", "Error");
      navigate("/register");
      return;
    }
  };
  
  return (
    <div className="App">
    

      <Navigation/>
   
  
       <Fragment>
      <Routes>
     
      <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
      <Route path="/signin" element={<Login></Login>}></Route>
      <Route path="/sujets" element={<SujetListe></SujetListe>}></Route>
      
      <Route path= '/accuiel' element={<Accuiel></Accuiel>}></Route>
      {/* <Route path="/addsujet" element={<Addsujet></Addsujet>}></Route> */}
      <Route path="/edit/:id" element={<Edit></Edit>}></Route>
      <Route path= "/sujetliste" element={<SujetListe></SujetListe>}></Route>
      <Route path= "/test" element={<Test></Test>}></Route>
  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restpassword" element={<RestPassword setEmail={setEmail} submitRestPassword={submitRestPassword} />} />
        <Route path="/answerpassword" element={<AnswerPassword user={user} />} />
        <Route path="/finishanswerpassword" element={<FinishAnswerPassword user={user} />} />
        
      </Routes>
   </Fragment>
    </div>
  );
}

export default App;


