import React, { useEffect, useState } from 'react'
import {apiurl , filterdata} from './Data'
import './App.css'
import Navbar from "./components/Navbar"
import Filter from './components/Filter'
import Cards from './components/Cards'

function App() {

  const [courses , setcourses] = useState(null);

  useEffect( () => {
    const fetchdata = async() => {
      try{
        const res = await fetch(apiurl);
        const output = await res.json();
        //save data into a variable
        setcourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchdata();
  } , [])

  return (
    <div>
      <Navbar/>
      <Filter
        filterdata = {filterdata}
      />
      <Cards courses = {courses}/>
    </div>
  )
}

export default App
