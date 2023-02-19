// import { Form,Button } from 'react-bootstrap'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import  { useState } from 'react'
// import { editsujet } from './redux/Actions'

// function Edit() {
//     const sujets=useSelector=>((stat)=>stat.sujets)
    
    
//     const [name,setName]=useState("")
// const [description,setDescription]=useState("")
// const [Image,setImage]=useState("")
// const{id}=useParams
// const dispatch= useDispatch();
// const navigate=useNavigate("")

//   return (
//     <div> 
//      <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Id</Form.Label>
//     <Form.Control onChange={(e)=>setImage(e.target.value)} value={id}  placeholder="d"/>
//   </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>titel</Form.Label>
//     <Form.Control onChange={(e)=>setName(e.target.value)} value={name} placeholder="name" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>description</Form.Label>
//     <Form.Control  onChange={(e)=>setDescription(e.target.value)} value={description}  placeholder="description" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicText">
//     <Form.Label>Image</Form.Label>
//     <Form.Control onChange={(e)=>setImage(e.target.value)} value={Image}  placeholder="Image"/>
//   </Form.Group>
  
//   <Link to={'/sujets'}><button onClick={()=>dispatch(editsujet)(id,{name,description,Image})}>save changes</button></Link>
//                      <Link to={'/dashbord'}><button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Retour</button></Link>
//                     </div>
//   )
// }

// export default Edit;





