import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class BeerDetail extends Component {
  state = {
      loading: true,
      beer: {}
  }

  componentDidMount() {
      axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params.myBeerIDThingy)
      .then(response => {
          console.log(response.data)
          this.setState({beer: response.data, loading: false})
      })
  }

  render() {
      return (
          <div className="App">
            
            {this.state.loading && <h1>LOADING...</h1>}

             <h1><Link to={"/"}>HOME</Link></h1>
              <h1 >{this.state.beer.name}</h1>
          </div>
      );
  }
}

export default BeerDetail;