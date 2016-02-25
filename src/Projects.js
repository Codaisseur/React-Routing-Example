import React from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {
  render() {
    let projectId = 1;

    return(
      <div class="projects">
        <h1>Projects!</h1>
        <p>
          <Link to={`/project/${projectId}`}>Project 1</Link>
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Projects;
