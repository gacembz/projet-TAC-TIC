import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSujet } from './redux/Actions';

function SujetCard({el}) {
  const disptach=useDispatch()
  return (
    
    <Card className='flex flex-col justify-items-center p-6 w-64 h-80 Card mr-5'>
    
      <Card.Img className="im" variant="top" src={el.Image} />
      
        <Card.Title className='mt-5'>{el.name}</Card.Title>
       
        <Button className='button' variant="primary">Go somewhere</Button>
      
       
      
    </Card> 
    
  );
}


  

export default SujetCard;