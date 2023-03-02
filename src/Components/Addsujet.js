// import React from 'react'
// import  { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addsujet } from './redux/Actionss/Actions';
// function Addsujet() {
// const [name,setName]=useState("")
// const [description,setDescription]=useState("")
// const [Image,setImage]=useState("")
// const navigate=useNavigate("")
// const dispatch= useDispatch("");
// console.log(navigate);
//   return (
//      <div>
     
//      <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>titel</Form.Label>
//     <Form.Control type="text" placeholder="name" onChange={e=>setName(e.target.value)}value={name}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>description</Form.Label>
//     <Form.Control type="text" placeholder="description" onChange={e=>setDescription(e.target.value)}value={description}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Image</Form.Label>
//     <Form.Control type="text" placeholder="Image" onChange={e=>setImage(e.target.value)}value={Image}/>
//   </Form.Group>
    
  
  
//       <Button variant='info'onClick={(e)=>{e.preventDefault();
//         dispatch(addsujet({id:Math.random(),name,description,Image})),navigate("/sujets")}}>save changes </Button>
        
//     </div>
     

//   )
//       }

// export default Addsujet