import React from 'react'
import { useContext } from 'react';
import { MedicalContext } from '../../MedicalContext';
import './Header.scss';
function Header() {
    const {currentUser} = useContext(MedicalContext)
    
  return (
    <div className='Header'>
        
        <h1>Haloo {currentUser.name}</h1>
         <h3>A Fit body A Calm mind</h3>
    </div>
  )
}

export default Header