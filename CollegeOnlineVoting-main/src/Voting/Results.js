import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Results() {
  const [topCandidates, setTopCandidates] = useState([]);

  useEffect(() => {
    // Fetch the top 3 candidates from the server
    axios
      .get('http://localhost:520/top-candidates')
      .then((response) => {
        setTopCandidates(response.data);
      })
      .catch((error) => {
        console.error('Error fetching top candidates:', error);
      });
  }, []);

  return (
    <div style={pageContainerStyle}>
      <h2>Top 3 Candidates</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Rank</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Votes Received</th>
          </tr>
        </thead>
        <tbody>
          {topCandidates.map((candidate, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{index + 1}</td>
              <td style={tableCellStyle}>{candidate.NAME}</td>
              <td style={tableCellStyle}>{candidate.VOTES}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Define CSS styles
const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px auto',
};

const tableStyle = {
  width: '50%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const tableHeaderStyle = {
  background: '#004080',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

export default Results;
