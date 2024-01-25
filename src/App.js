import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUserData(data.results[0]))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Generator</h1>
        {userData && (
          <div>
            <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`} />
            <p>Name: {`${userData.name.first} ${userData.name.last}`}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Country: {userData.location.country}</p>
          </div>
        )}
        <button onClick={fetchRandomUser}>Generate New User</button>
      </header>
    </div>
  );
}

export default App;
