
import { Routes,Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Carousell from "./Components/Accuiel"
import Footer from "./Components/Footer";
import Inscrire from "./Components/Inscrire"
import SujetListe from "./Components/SujetListe";
import Login from "./Components/Login";
import Accuiel from "./Components/Accuiel";
import Addsujet from "./Components/Addsujet";
import Edit from "./Components/Edit";
import AdminProfile from "./Components/InterfaceAdmin/AdminProfile"

import DeleteSujet from "./Components/Deletesujet";
import Deletesujet from "./Components/Deletesujet";




function App() {
  
  return (
    <div className="App">
    

      <Navigation/>
    
      
      <Routes>
      <Route path="/sujets" element={<SujetListe></SujetListe>}></Route>
      <Route path= '/inscrire' element={<Inscrire></Inscrire>}></Route>
      <Route path= '/login' element={<Login></Login>}></Route>
      <Route path= '/accuiel' element={<Accuiel></Accuiel>}></Route>
      <Route path="/addsujet" element={<Addsujet></Addsujet>}></Route>
      <Route path="/edit/:id" element={<Edit></Edit>}></Route>
       <Route path="/sujetliste" element={<SujetListe></SujetListe>}></Route>
        <Route path="/deletesujet" element={<Deletesujet></Deletesujet>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;


