import { useState } from 'react'
import {puppyList} from './data.js'
import './index.css'



function App() {
  // const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  // console.log(useState(puppyList))

  const featuredPup = puppies.find((pup)=> 
    pup.id === featPupId)

    console.log(featuredPup)

  return (
    <>
      <div id='menu'>
          <h2>Click on a puppy below to display more details:</h2>
          {
            puppies.map((puppy) => {
                return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            })
          }

          {featPupId && (
            <div className='pupDetail'>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}

      </div>

    </>
  )
}

export default App



