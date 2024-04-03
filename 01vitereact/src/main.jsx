import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h2>Custom My App || Chai</h2>
        </div>
    )
}

const Reactelement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}

const anotherelement = (
    <a href="https://google.com" target='_blank'>Visit the Google</a>
)

const reactelement = React.createElement(
    'a',
    {href : "https://google.com" , target : '_blank'}, 'click me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />

)
