import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionDate, setSessionDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call('gymSessions.book', name, email, sessionDate, (error) => {
      if (error) {
        if (error.error === 'class-full') {
          alert('This class is already full.');
        } else {
          alert(`Error: ${error.error}`);
        }
      } else {
        alert('Booking successful!');
        setName('');
        setEmail('');
        setSessionDate('');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sessionDate" className="form-label">Session Date</label>
        <input
          type="date"
          className="form-control"
          id="sessionDate"
          value={sessionDate}
          onChange={(e) => setSessionDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Book Session</button>
    </form>
  );
};
