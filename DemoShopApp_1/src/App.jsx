import './App.css'
import Newproduct from './components/Newproduct'
import Products from './components/Products'

function App() {

  const products = [
    {
      id : 'p1',
      title : 'Nirma',
      amount : 100 ,
      date : new Date(2022 , 8 , 10),
    },
    {
      id : 'p2',
      title : 'Surf_excel' ,
      amount : 100 ,
      date : new Date(2022 , 8 , 13),
    },
    {
      id : 'p3',
      title : 'Tide' ,
      amount : 100 ,
      date : new Date(2022 , 8 , 12),
    },
    {
      id : 'p4',
      title : 'Maggi' ,
      amount : 200 ,
      date : new Date(2022 , 8 , 11),
    }
  ]

  return (
    <div>
      <Products items = {products} />
      <Newproduct/>
    </div>
  )
  
}

export default App
