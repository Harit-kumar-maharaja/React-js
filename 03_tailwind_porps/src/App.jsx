import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username : "Harit",
    age : 19
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>Tailwind css test</h1>
      <Card username= "Chai aur code" btntext="click me"/>
      <Card username="harit" btntext="Change me"/>
      
    </>
  )
}

export default App
