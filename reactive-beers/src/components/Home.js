// src/components/Home.js
import { Link } from 'react-router-dom';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <Link to="/all"><img src="https://media.gqindia.com/wp-content/uploads/2017/04/beer-1.jpg" alt="" style={{ width: '300px' }} /></Link>
          <h1>All Beers</h1>
          <Link to="/all">All Beers</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <Link to="/random"><img src="https://media.gqindia.com/wp-content/uploads/2017/04/beer-1.jpg" alt="" style={{ width: '300px' }} /></Link>
          <h1>Random Beer</h1>
          <Link to="/random">Random Beer</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <Link to="/new"><img src="https://media.gqindia.com/wp-content/uploads/2017/04/beer-1.jpg" alt="" style={{ width: '300px' }} /></Link>
          <h1>New Beer</h1>
          <Link to="/new">New Beer</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>







      </div>
    )
  }
};

export default Home
