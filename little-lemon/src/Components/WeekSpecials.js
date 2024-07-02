import { Link } from 'react-router-dom';
import PastaImage from '../assets/mediterraneanpasta.jpeg'
import falafelImage from '../assets/Falafel.jpeg';
import seaBassImage from '../assets/seabass.webp';
import './WeekSpecials.css';
import MealCard from './MealCard';
import "./WeekSpecials.css"

const meals = [
    {
      name: 'Mediterranean Pasta',
      image: PastaImage,
      price: '$14.99',
      description: `Delicious pasta dish with sun-dried tomatoes, kalamata olives, 
        and fresh basil in a light olive oil sauce.`,
    },
    {
      name: 'Falafel Platter',
      image: falafelImage,
      price: '$8.99',
      description: `Crispy falafel served with hummus, tabbouleh, and warm pita bread.`,
    },
    {
      name: 'Grilled Sea Bass',
      image: seaBassImage,
      price: '$18.99',
      description: `Fresh sea bass grilled to perfection, served with lemon butter sauce 
        and seasonal vegetables.`,
    },
  ];
  

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to="/order-online">
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;