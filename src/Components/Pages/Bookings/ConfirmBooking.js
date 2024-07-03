import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};  

export default ConfirmedBooking;
