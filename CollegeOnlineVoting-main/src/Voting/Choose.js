import "./Choose.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Choose() {
  const [userData, setuserData] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const fetch = async () => {
      try {
        const user = localStorage.getItem("user");
        const response = await axios.get(
          `http://localhost:520/user/?REGNO=${user}`
        );
        setuserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetch();
  }, []);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    const user = localStorage.getItem("user");
    if (selectedOption === "vote") {
      window.location.href = "/vote-page";
    } else if (selectedOption === "participate") {
      
      navigate("/participate-page", { state: { user } });
    }
  };
  return (
    <div id="container">
      <div className="profile-vote-box">
        <div className="profile-box">
          <img src="profile_photo.png" alt="" />

          <h1>Name: {userData.NAME}</h1>
          <h3>Regno: {userData.REGNO}</h3>
          <h3>Branch: {userData.BRANCH}</h3>
        </div>

        <div className="voting-box">
          <h2>Choose an option:</h2>
          <select onChange={handleOptionChange}>
            <option value="Select One">-</option>
            <option value="vote">Vote</option>
            <option value="participate">Nominate</option>
          </select>
          <button className="hello" onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Choose;
