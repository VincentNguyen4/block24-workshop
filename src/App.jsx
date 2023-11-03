import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {
  console.log("puppy list: ", puppyList)

  const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
