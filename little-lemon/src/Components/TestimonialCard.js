import './TestimonialCard.css';

const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-image">
        <img src={customer.image} alt={customer.fullName} />
      </div>
      <div className="testimonial-content">
        <h3>{customer.fullName}</h3>
        <div className="testimonial-rating">
          {customer.rating.map((star, index) => (
            <span key={index} className={`star ${star === 1 ? 'full' : 'half'}`}>★</span>
          ))}
        </div>
        <p>{customer.says}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
