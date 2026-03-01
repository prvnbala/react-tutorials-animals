import { useState } from 'react'
import AnimalShow from './AnimalShow';

function App() {
  const [count, setCount] = useState(0);
  const [animalList, setAnimalList] = useState([]);

  function handleClick() {
    setCount(count + 1);
    setAnimalList([...animalList, <AnimalShow type="cow" key={count} />]);
  }

  return (
    <div>
      <div>Test Button</div>
      <button onClick={handleClick}>Add animals</button>
      <div>Button was pressed {count} times!</div>
      <div>Animals</div>
      <div>{animalList}</div>
    </div>
  )
}

export default App
