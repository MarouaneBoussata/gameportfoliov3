import React from 'react'
import '../styles/exitmenu.css'
import { useNavigate } from 'react-router-dom'

const ExitMenu = () => {

    const Navigate1 = (evt) => {
        Navigate2('https://mb6devops.netlify.app/')
    }
    const Navigate2 = useNavigate()
    

  return (
    <div className='center'>
        <p className='pExit'>Do you want to exit ?</p>
            <button  className='button1' onClick={Navigate1}> YES </button>
            <button className='button2' onClick={()=>Navigate1}>NO</button>
    </div>
  )
  
}

export default ExitMenu