import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberallowed , setnumberallowed] = useState(false)
  const [charallowed , setcharacterallowed] = useState(true)
  const [password , setpassword] = useState("")

  //useref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback( () =>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) {
      str += "0123456789"
    }
    if (charallowed) {
      str += "!@#$%^&*()_+?><"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass) 

  } , [length , numberallowed , charallowed , setpassword])

  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  } , 
  [password])

  useEffect(() => {
    passwordgenerator()
  } , [length , numberallowed , charallowed , passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 text-xl my-8 text-orange-500 bg-gray-600'>
      <h1 className='text-4xl text-center text-white mb-8 my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordref}
        />
        <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label >Lenght : {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked= {numberallowed}
          id="numberinput"
          
          className='cursor-pointer'
          onChange={() => {
            setnumberallowed((prev) => !prev);
          }}
          />
          <label >Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked= {charallowed}
          id="characterinput"
          
          className='cursor-pointer'
          onChange={() => {
            setcharacterallowed((prev) => !prev);
          }}
          />
          <label >Characters</label>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
