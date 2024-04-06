import { useState } from 'react'

import './App.css'
import Home from './components/home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
