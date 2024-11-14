import { useState } from 'react'
import './App.css'
import BusinessCard from "./components/BusinessCard"
import Produit from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  function foo()
  {
    return 0;
  }

  console.log(`DEBUG ${foo()}`)

  return (
    <>
    <div style={{color:"#a9a9a9"}} >
      <BusinessCard/>
      <Produit></Produit>

    
      <button onClick={()=>{setCount(count +1)}}>Clique {count}</button>

      <h1> Partie contenue</h1>

      <p>Retour de foo : {foo()}</p>
      </div>
    </>
  )
}

export default App
