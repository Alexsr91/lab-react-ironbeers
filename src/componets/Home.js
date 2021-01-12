import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
        <section>
            <h1><Link to={"/Beers"}>All Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent finibus nisl mollis posuere tincidunt. Mauris auctor imperdiet arcu.</p>
        </section>
        <section>
            <h1><Link to={"/"}>Random Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent finibus nisl mollis posuere tincidunt. Mauris auctor imperdiet arcu.</p>
        </section>
        <section>
            <h1><Link to={"/"}>New Beer</Link></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent finibus nisl mollis posuere tincidunt. Mauris auctor imperdiet arcu.</p>
        </section>
        </div>
    );
  }

  export default Homepage;
