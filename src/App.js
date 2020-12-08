import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    document.title = `You clicked ${count} times.`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
    </div>
  )
}

export default App
