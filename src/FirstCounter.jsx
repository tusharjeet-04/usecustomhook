import React from 'react'
import useCustom from './Usecustom'
import './App.css'


const FirstCounter = () => {

    const clickedOne = useCustom(0,"FirstComponent")

  return (
    <div className='first-counter'>
        <h2 className='first-heading'>This is my first component</h2>
        <button className='first-button' onClick={clickedOne}>Click</button>
    </div>
  )
}

export default FirstCounter