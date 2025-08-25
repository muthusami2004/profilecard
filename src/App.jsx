import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './component/Name/Name'
import Profilecard from './Component/ProfileCard/ProfileCard'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profilecard/>
    <Footer/>
    </>
  )
}

export default App
