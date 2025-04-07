import React from 'react';
import './Thanksvote.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
function Thanksvote() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    // Use the navigate function to go back to the home page
    navigate('/');
  };
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-heading">📣🎉Thank you for VOTING🎉📣</h2>
      <p className="thank-you-message">Your vote has been recorded.</p>
      {/* Add a button with the thank-you-button class (if needed) */}
       <button className="thank-you-button" onClick={handleBackToHome}>Back to Home</button> 
    </div>
  );
}

export default Thanksvote;
