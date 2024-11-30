import React from 'react'
import useCustom from './Usecustom'
import './App.css'


const SecondCounter = () => {

    const counterTwo = useCustom(2,"secondComponent") 
  return (
    <div className='second-counter'>
        <h2 className='second-heading'>This is my second component</h2>
        <button className='second-button' onClick={counterTwo}>Click</button>
    </div>
  )
}

export default SecondCounter