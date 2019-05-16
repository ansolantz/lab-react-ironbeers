import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import Error from './components/Error';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }

  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data })
      })
  };


  render() {
    return (
      <div className="container">
        {/* {this.state.beers.map(beer => <h1 key={beer._id}>{beer.name}</h1>)} */}
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route path="/all" component={() => <ListBeers beersArray={this.state.beers} />} />

          <Route path="/single/:id" component={SingleBeer} />
          <Route path='/random' component={RandomBeer} />
          <Route path="/new" component={NewBeer} />
          {/* <Route exact path="/search?q={query}" component={ListBeers} /> */}
          <Route component={Error} />
        </Switch>

      </div>
    );
  }
}

export default App;
