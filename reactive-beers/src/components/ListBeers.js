// src/components/ListBeers.js
import React from 'react';
import { Link } from 'react-router-dom';

class ListBeers extends React.Component {
  render() {
    return (
      <div>
        <h1>All Beers</h1>

        {
          this.props.beersArray.map((beer) => {
            return (
              <div className="beerBlock">
                <img src={beer.image_url} alt={beer.name} className="smallBeerImg" />
                <h2><Link to={`/single/${beer._id}`}>{beer.name}</Link></h2>
                <p>{beer.tagline}</p>
                <span className="contributedBy">{beer.contributed_by}</span>
              </div>
            )

          })
        }

      </div>
    )
  }
};

export default ListBeers