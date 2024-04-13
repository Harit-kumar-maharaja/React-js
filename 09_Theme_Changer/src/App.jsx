
import { useEffect, useState } from 'react'
import './App.css'
import { themeprovider } from './Contexts/Theme'
import Card from './components/Card'
import Themebtn from './components/Themebtn'

function App() {
  
  const [thememode , setthememode] = useState("light")

  const lighttheme =  () => {
    setthememode("light")
  }
  const darktheme =  () => {
    setthememode("dark")
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(thememode)
  } , [])

  return (
    <themeprovider value = {{thememode , lighttheme , darktheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Themebtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </themeprovider>
  )
}

export default App
