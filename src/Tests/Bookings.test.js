import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

it('should render correctly with initial state', () => {
    const availableTimes = ['12:00', '13:00'];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    const { getByLabelText, getByText } = render(
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    expect(getByLabelText(/Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Time/i)).toBeInTheDocument();
    expect(getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(getByText(/Make your reservation/i)).toBeInTheDocument();
  });

  it('should show error message when date input is invalid', () => {
    const availableTimes = ['12:00', '13:00'];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    const { getByLabelText, getByText } = render(
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const dateInput = getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: '' } });

    expect(getByText(/Please choose a valid date/i)).toBeInTheDocument();
  });