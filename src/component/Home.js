import React from 'react'
import HomeMain from './HomeMain'
import Sidebar from './Sidebar'
import '../App.css'


function Home() {
  return (
    <div className='home-outer'>
        <Sidebar /> 
        <HomeMain />
    </div>
  )
}

export default Home