import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Jokes = () => {
    const [jokes, setjokes] = useState([])

    useEffect(()=>{
      axios.get('/api/jokes')
      .then((res)=>setjokes(res.data))
      .catch((err)=>console.log(err))
    })
  
    return (
      <>
       <h1>Read Jokes</h1>
       <h3>Total Jokes = {jokes.length}</h3>
     <div>
       {
         jokes.map((joke)=>{
          return <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
         })
        }
     </div>
      </>
    )
}

export default Jokes