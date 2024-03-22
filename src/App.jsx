import './App.css'
import LineChat from './components/LineChat/LineChat'

import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

// import DaisyNav from './components/DaisyNav/DaisyNav'


function App() {

  return (
    <>
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChat></LineChat>
      <Phones></Phones>

    </>
  )
}

export default App
