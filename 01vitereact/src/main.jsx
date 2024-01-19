/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to vist google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank' rel="noreferrer">Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {href:"https://google.com" ,target:'_blank'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
