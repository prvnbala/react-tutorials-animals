import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>Test Button</div>
      <button onClick={handleClick}>Add animals</button>
      <div>Button was pressed {count} times!</div>
    </div>
  )
}

export default App
