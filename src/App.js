
import { Routes,Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

import Footer from "./Components/Footer";
import SujetListe from "./Components/SujetListe";
import Login from "./Components/Login";
import Accuiel from "./Components/Accuiel";
import Addsujet from "./Components/Addsujet";
import Edit from "./Components/Edit";
import Deletesujet from "./Components/Deletesujet";
import Register from "./Components/Register";
import "./App"
import UserProfile from "./Components/UserInterface/UserProfile"
import { Home } from "@mui/icons-material";
import Dashboard from "./Components/Dashboard"

function App() {
  
  return (
    <div className="App">
    

      <Navigation/>
   
  
      
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
      <Route path="/signin" element={<Login></Login>}></Route>
      <Route path="/sujets" element={<SujetListe></SujetListe>}></Route>
      <Route path= '/register' element={<Register></Register>}></Route>
      <Route path= '/login' element={<Login></Login>}></Route>
      <Route path= '/accuiel' element={<Accuiel></Accuiel>}></Route>
      // <Route path="/addsujet" element={<Addsujet></Addsujet>}></Route>
      // <Route path="/edit/:id" element={<Edit></Edit>}></Route>
      <Route path= "/sujetliste" element={<SujetListe></SujetListe>}></Route>
   <Route path= "/dashboard" element={<Dashboard></Dashboard>}></Route>
        
      </Routes>
   
    </div>
  );
}

export default App;


