import BirdImage from "./assets/bird.svg"
import CatImage from "./assets/cat.svg"
import CowImage from "./assets/cow.svg"
import DogImage from "./assets/dog.svg"
import GatorImage from "./assets/gator.svg"
import HeartImage from "./assets/heart.svg"
import HorseImage from "./assets/horse.svg"

const animals = {
    "bird": BirdImage,
    "cat": CatImage,
    "cow": CowImage,
    "dog": DogImage,
    "gator": GatorImage,
    "horse": HorseImage
}

function AnimalShow(props) {
    return <img src={animals[props.type]} alt="" />;
}

export default AnimalShow;
