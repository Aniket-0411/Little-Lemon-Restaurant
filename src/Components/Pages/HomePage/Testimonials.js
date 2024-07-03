import customer1Image from '../../../assets/customer1.webp';
import customer2Image from '../../../assets/customer2.jpg';
import customer3Image from '../../../assets/customer3.jpg';
import customer4Image from '../../../assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Fantastic food and lovely atmosphere. Will come again!`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The service was top-notch, and the food was out of this world.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `A delightful experience, from the starters to the desserts.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Loved the modern twist on traditional recipes. Highly recommended!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What people say about us!</h2>
        <div className="testimonials-carousel">
          {customers.map((customer, index) => 
            <TestimonialCard key={index} customer={customer} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
