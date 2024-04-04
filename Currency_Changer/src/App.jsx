import { useState } from 'react'
import { InputBox } from './components'
import usecurrencyinfo from './hooks/use_currency_info'
import './App.css'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)

  const currencyinfo = usecurrencyinfo(from)

  const options = Object.keys(currencyinfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to])
  }

  return (
    <div
      className="w-full h-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGg0UDrT8_7YuzN3fCr09Y_UwoerxW5ZuEw&s')`,
      }}
    >
      
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
                label="From"
                amount={amount}
                currencyoption={options}
                oncurrencychange={(currency) => setamount(amount)}
                onamountchange={(amount) => setamount(amount)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedamount}
                currencyoption={options}
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={from}
                amountdisable
              />
            </div>
            <button type="submit" className="w-full text-white px-4 py-3 rounded-lg " style={{backgroundColor: '#2563EB'}}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
