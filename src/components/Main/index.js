import React from 'react';
import PhasesBar from '../PhasesBar';
import PhasesBoard from '../PhasesBoard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <PhasesBar />
        <PhasesBoard />
      </div>
    );
  }
}

export default Main;
