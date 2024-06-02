import React, { useEffect, useState } from 'react'
import {apiurl , filterdata} from './Data'
import './App.css'
import Navbar from "./components/Navbar"
import Filter from './components/Filter'
import Cards from './components/Cards'
import {toast} from "react-toastify"
import Spinner from './components/Spinner'

function App() {

  const [courses , setcourses] = useState(null);
  const [loading , setloading] = useState(true);

  async function fetchdata() {
    setloading(true);
    try{
      const response = await fetch(apiurl);
      const output = await response.json();
      //save data into a variable
      setcourses(output.data);
    }
    catch(error){
      toast.error ("Something went wrong");
    }
    setloading(false);
  }

  useEffect( () => {         
    fetchdata();
  } , [])

  return (
    <div className='min-h-screen flex flex-col'> 
      <div><Navbar/></div>
      <div><Filter
        filterdata = {filterdata}
      />
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
        }
      </div>
    </div>
  )
}

export default App
