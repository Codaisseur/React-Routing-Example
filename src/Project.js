import React from 'react';

class Project extends React.Component {
  render() {
    return(
      <div className="project">
        <h1>Project!</h1>
        <p>{this.props.params.projectId}</p>
      </div>
    );
  }
}

export default Project;
