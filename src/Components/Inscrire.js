// import React from 'react'
// import  { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {inscrire} from './redux/Actions'
// const Inscrire = () => {
//   const dispatch= useDispatch();
// const [Nom,setNom]=useState("")
// const [Mot,setMot]=useState("")
// const[Gmail,setGmail]=useState("")
// const[Numero,setNumero]=useState("")

// const navigate=useNavigate()
// const handleSubmit=(e)=>{
//   e.preventDefault()
//   dispatch(inscrire({Nom,Gmail,Numero,Mot},navigate))
//   navigate('/inscrire')
// }


//   return (<div>
//     <Form style={{width:"50%",margin:"auto",paddingTop:"80px"}}>
  

//   <Form.Group className="mb-3" controlId="formBasicNumber">
//     <Form.Label>Nom utilisateur</Form.Label>
//     <Form.Control type="text" placeholder="nom" onChange={e=>setNom(e.target.value)}value={Nom}/>
//   </Form.Group>
 

  
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Gmail</Form.Label>
//     <Form.Control type="text" placeholder="Gmail" onChange={e=>setGmail(e.target.value)}value={Gmail}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Numero Telephone</Form.Label>
//     <Form.Control type="number" placeholder="Numero" onChange={e=>setGmail(e.target.value)}value={Numero}/>
//   </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Mot de passe</Form.Label>
//     <Form.Control type="text" placeholder="Mot de passe" onChange={e=>setMot(e.target.value)}value={Mot}/>
//   </Form.Group>
  
//   <Button variant="primary" type="submit"onClick={handleSubmit} >
//     Submit
//   </Button>
// </Form>
    
    
//     </div>
 
    
//   )
// }

// export default Inscrire



  
  


