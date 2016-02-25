# React Routing Example

## Installation

```bash
npm install
npm start
open http://localhost:3000
```

## Set up in your own project

First install the `react-router` package as a dependency:

```bash
npm install --save react-router
```

Then set up the routes in your entrypoint:

```js
// src/index.js

// Import the Routing classes
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import your own components to use in the `render()` function below
import App from './App';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import PageNotFound from './PageNotFound';

// Set up your routes
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>                           // everything will be under the `App` component
      <IndexRoute component={Welcome} />                       // the `Welcome` component will be rendered on `/`
      <Route path="/projects" component={Projects}/>           // the `Projects` component will be rendered on `/projects`
      <Route path="/project/:projectId" component={Project}/>  // the `Project` component will be rendered on `/project/<id>`
      <Route path="/about" component={About}/>                 // the `About` component will be rendered on `/about`
      <Route path="*" component={PageNotFound}/>               // all other routes will render `PageNotFound`
    </Route>
  </Router>
), document.getElementById('root'));
```

Now, we need to tell the `App` component to render the component passed
on by the Router and we can add links to other paths by using the `Link`
component from React Router.

```js
// src/App.js

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            {/* Render some links to navigate */}
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>

            {/* Render the component passed on by the Router */}
            {this.props.children}
          </div>
        );
    }
}

export default App;
```

## Accessing Route params

In our project route, we defined a `projectId` to be passed on in this
way:

```js
      <Route path="/project/:projectId" component={Project}/>  // the `Project` component will be rendered on `/project/<id>`
```

To access that `projectId`, we can use the `props.params` of the
component, so in this case we can get the id passed in as:

```js
// src/Project.js

this.props.params.projectId
```
