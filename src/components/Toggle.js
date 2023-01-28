import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'
import {BsSunFill,BsFillMoonFill} from 'react-icons/bs'
const Toggle = () => {
   
    const {theme,setTheme} = useContext(ThemeContext)
    const handleToggle = ()=> {
        setTheme(!theme)
        document.querySelector('.toggle').classList.toggle('switch')
    }
  return (
    <div className="toggle" onClick={handleToggle}>
        
            {
                theme ? <BsFillMoonFill /> : <BsSunFill />
            }    
        
       
    </div>
  )
}

export default Toggle