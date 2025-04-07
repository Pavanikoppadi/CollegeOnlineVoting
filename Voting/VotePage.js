import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vote.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
function VotePage() {
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from the server (Node.js backend)
    axios.get('http://localhost:520/candidates')
      .then((response) => {
        setParticipants(response.data.map((participant) => ({
          ...participant,
          votes: 0, // Initialize vote count to 0 for each participant
        })));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleVote = async (REGNO) => {
    try {
      console.log(REGNO);
      // Send a POST request to update the vote count in the backend
      const response=await axios.post('http://localhost:520/vote', { REGNO });
      console.log(response);
    
    
    // You can also send a vote request to the server here if needed
    navigate('/thanksv');
    }
    catch (error) {
      console.error('Error submitting form:', error);
  };
  }
  return (
    <div>
      <h2>Nominees Details</h2>
      <br/>
      <div className="participant-grid">
        {participants.map((participant) => (
          <div key={participant.id} className="participant-box">
            <strong>Name:</strong> {participant.NAME}<br /><br/>
            <strong>Register Number:</strong> {participant.REGNO}<br /><br/>
            <strong>Skills:</strong> {participant.SKILLS}<br /><br/>
             <strong>Abilities:</strong> {participant.HIGHLIGHTS}<br/>
           <img className="i" src={participant.PHOTO} alt=""/> 
            <button className="bye" onClick={() => handleVote(participant.REGNO)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotePage;

