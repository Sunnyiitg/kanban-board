import React, { useContext } from 'react'
import { BsSun, BsMoon } from "react-icons/bs";
import './Navbar.css'
import { AppContext } from '../../context/AppContext';
const Navbar = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  function modeHandler() {
    setLightMode(!lightMode);
  }
  return (
    <div className='navbar-main'>
      <h3>Kanban Board</h3>
      <div>
            {lightMode === false ? (
              <div className='navbar-mode'>
              <BsSun className="light" onClick={modeHandler} />
              <p>Light Mode</p>
              </div>
            ) : (
              <div className='navbar-mode'>
              <BsMoon className="dark" onClick={modeHandler} />
              <p>Dark Mode</p>
              </div>
            )}
      </div>
    </div>
  )
}

export default Navbar
