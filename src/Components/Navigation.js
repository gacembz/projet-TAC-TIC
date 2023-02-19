import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navigation.css'
function Navigation() {
  return (
    <div>
    


    <Navbar className='Nava'>
      <Container>
        <Navbar.Brand href="#home">
       <Link to={'/accuiel'}><img className='logo'  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIx36cBrd30ObEA4sLRDDTVMgNyL28Xt-3ng&usqp=CAU"></img></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div className='bo'>
           <Link to={'/login'}><button className='loginBtn'>Login</button></Link>
           
           </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    



    </div>
  )
}

export default Navigation
