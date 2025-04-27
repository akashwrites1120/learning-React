import React, { useState } from 'react'

const UsestateLearn = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increament</button>
    </div>
  )
}

export default UsestateLearn