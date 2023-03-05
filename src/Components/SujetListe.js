import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer';
import SujetCard from './SujetCard';

function SujetListe() {
    const sujets = useSelector((state)=>state.sujets);
  return (
    <div style={{display:"flex",flexWrap:'wrap',margin:'10%',backgroundImage:'./back3.jpg'}}>
    <div className='flex px-6 py-6 align-center'>
    {sujets.map((el)=>(
        <SujetCard  el={el} key={el.id}> test</SujetCard>
    )
        )}
        
    </div>
    </div>
  )
}

export default SujetListe