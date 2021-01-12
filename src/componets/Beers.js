import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({ beers: response.data })
            })
    }

    render() {
        return (
            <div className="App">

                <h1><Link to={"/"}>HOME</Link></h1>
                {this.state.beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <p><Link to={"/Beers/" + beer._id}>{beer.name}</Link></p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Beers;




