import { useState } from 'react'
import AnimalShow from './AnimalShow';
import "./App.css"

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
    <div className='app'>
      <div>Add Random Animals</div>
      <button onClick={handleClick} className='button'>Add animals</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

export default App
