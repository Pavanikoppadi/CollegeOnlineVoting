import React from 'react';
import './Thank.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function Thank() {
  // const navigate = useNavigate();
  // const history = useHistory();

  // Replace the current route with a new one

  const handleBackToHome = () => {
    // Use the navigate function to go back to the home page
    window.location.href = '/';
  };
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-heading">📣🎉Thank you for PARTICIPATING🎉📣</h2>
      <p className="thank-you-message">Your response has been recorded. Good luck!</p>
      <button className="thank-you-button" onClick={handleBackToHome}>Back to Home</button> 
    </div>
  );
}

export default Thank;
