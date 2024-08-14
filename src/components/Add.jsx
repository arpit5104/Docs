import React, { useState } from 'react';

const Add = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div>
      {!isFormOpen && (
        <button onClick={handleButtonClick}>Add</button>
      )}
      {isFormOpen && (
        <div style={{ pointerEvents: 'auto' }}>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {isFormOpen && (
        <div style={{ pointerEvents: 'none', opacity: 0.4 }}>
          <p>All other content is disabled while the form is open.</p>
        </div>
      )}
    </div>
  );
};

export default Add;
