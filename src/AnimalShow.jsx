import { useState } from "react"
import BirdImage from "./assets/bird.svg"
import CatImage from "./assets/cat.svg"
import CowImage from "./assets/cow.svg"
import DogImage from "./assets/dog.svg"
import GatorImage from "./assets/gator.svg"
import HeartImage from "./assets/heart.svg"
import HorseImage from "./assets/horse.svg"
import "./AnimalShow.css"

const animals = {
    "bird": BirdImage,
    "cat": CatImage,
    "cow": CowImage,
    "dog": DogImage,
    "gator": GatorImage,
    "horse": HorseImage
}

function AnimalShow(props) {
    const [clicks, setClicks] = useState(0);

    function handleClick() {
        setClicks(clicks + 1);
    }

    return <div onClick={handleClick} className="animal-show">
        <img src={animals[props.type]} alt="animal" className="animal" />
        <img src={HeartImage} alt="heart" style={{"width": 10 + 10*clicks + "px"}} className="heart" />
    </div>;
}

export default AnimalShow;
