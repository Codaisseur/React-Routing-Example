import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>

            {this.props.children}
          </div>
        );
    }
}

export default App;
