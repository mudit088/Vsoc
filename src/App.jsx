import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './Components/About'
import Registrations from './Components/Registrations'
import Timeline from './Components/Timeline'
import Front from './Components/Front'
import Navbar from './Components/Navbar'
import Partaners from './Components/Partaners'
import Footerb  from './Components/Footerb'
// import Leaderboard from './Components/Leaderboard'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LeaderboardN from './Components/LeaderboardN'



function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    
    {/* <h1 className='text-red-700'>Hello</h1> */}
   
     <Navbar/>
    <Front/>
    <About/>
    {/* <Registrations/> */}
    <Timeline/>
    <LeaderboardN/>
    {/* <Leaderboard/> */}
    <Partaners/>
    <Footerb/>
         
  </div>
  )
}

export default App
