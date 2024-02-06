import { useState } from 'react'
import  Card  from './components/card.jsx'

import './App.css'

function App() {

  let myobj = {
    usernmae : " haseeb"
}
let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400' >dddddd</h1>
   <Card  haseeb="" someobj={myobj} somearr={newArr}/>
   <Card/>

    
    </>
  )
}

export default App
