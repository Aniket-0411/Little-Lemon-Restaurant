import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bookings.css';
import { fetchAPI, submitAPI } from '../../../utils/api';
// import pages from '../../../utils/pages';
import BookingForm from './BookingForm';
export default function Bookings() {
    
    const [date, setDate] = useState(new Date())
   
    function initializeTimes(date) {
      return fetchAPI(date)
      }
  
    function updateTimes(date) {
      const dateObj = new Date(date)
      return fetchAPI(dateObj)
    }
  
    const navigate = useNavigate();
  
    function submitData(formData) {
      const isSubmitted = submitAPI(formData);
  
      if (isSubmitted) {
        navigate("/confirm-booking");
      }
    }
    
    function reducer(state, action) {
      let newState
      switch (action.type) {
        case 'UPDATE_TIMES':
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate)
        break;
  
        default:
          throw new Error()
      }
      return newState
    }
  
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
      return (
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData}/>
      )
    }
    
  
    