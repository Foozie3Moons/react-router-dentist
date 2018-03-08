import React, { Component } from 'react';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import {
  BrowserRouter as Router, // we can declare aliases for our imports
  Route,
  Link
} from 'react-router-dom'

// procedures is being sent as props to our 'procedures' component below
let procedures = ['Root Canal', 'Crown', 'Checkup', 'Cavity Filling', 'TOOTH REMOVAL', 'Oil Change']

class App extends Component {
  render() {
    return (
      <Router>
        {/* ^^^ this is the wrapper for our routing */}
        {/* Router requires one child, so wrapping your routes in a div is required */}
        <div>
          <nav>
            {/* Adding links that use HTML 5 browser history */}
            <Link to='/'>Go to Home Page</Link>{' '}
            <Link to='/procedures'>See Our Procedures</Link>{' '}
            <Link to='/contact'>Contact Us!</Link>
          </nav>
          {/* Router uses these to know what components to render */}
          <Route exact path='/' component={Home} />
          {/* if we want to pass props to our routes, we need an anonymous function that returns our Component as jsx */}
          <Route exact path='/procedures' render={() => <Procedures ops={procedures} />} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
