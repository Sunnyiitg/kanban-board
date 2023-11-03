import React from 'react'
import './Home.css'
// import Display from '../../components/Display/Display'
import Display2 from '../../components/Display2/Display2'
import Dashboard from '../Dashboard/Dashboard'
const Home = () => {
  return (
    <div className='home-main'>
        {/* <Display/> */}
        {/* PREVIOUS DISPLAY BUTTON WAS NOT LOOKING COOL */}
        <Display2/>
        <Dashboard/>
    </div>
  )
}

export default Home
