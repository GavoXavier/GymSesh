import React, { useState } from 'react';

export const Form = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');



const handleSubmit = (event) => {
    event.preventDefault();

    // Call the Meteor method to insert the data into the database
    Meteor.call('formData.insert', input1, input2, input3, (error) => {
      if (error) {
        alert(`Error: ${error.error}`);
      } else {
        // Reset input fields after successful insertion
        setInput1('');
        setInput2('');
        setInput3('');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Full Names</label>
        <input
          type="text"
          className="form-control"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="input2" className="form-label">E-mail Address</label>
        <input
          type="text"
          className="form-control"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="input3" className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          id="input3"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};
