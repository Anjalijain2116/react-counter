import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="welcome">Welcome to My Counter App</h1>
      <p className="description">This is a simple React application that demonstrates a counter functionality. 
        You can add, update, and delete counters. </p>
        <p className="description">Additionally, there is a user management 
        dashboard where you can manage user information.</p>
     
      <div className="btn-container">
        <Link to="/counters">
          <button className="btn">Task 1&2</button>
        </Link>
        <Link to="/task3">
          <button className="btn">Task 3</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
