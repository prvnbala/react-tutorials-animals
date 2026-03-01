import { useState } from 'react'
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ["bird", "cat","cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function App() {
  const [count, setCount] = useState(0);
  const [animalList, setAnimalList] = useState([]);

  function handleClick() {
    setCount(count + 1);
    setAnimalList([...animalList, getRandomAnimal()]);
  }

  const renderedAnimals = animalList.map((animal, i) => {
    return <AnimalShow type={animal} key={i}/>
  });

  return (
    <div>
      <div>Test Button</div>
      <button onClick={handleClick}>Add animals</button>
      <div>Button was pressed {count} times!</div>
      <div>Animals</div>
      <div>{renderedAnimals}</div>
    </div>
  )
}

export default App
