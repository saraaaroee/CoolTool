import React from 'react';
import './index.scss';

const PhasesBar = () => (
  <div className="phasesBar">
    <div className="phaseTitleContainer">
      <h3>To do</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Flowcharts</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Wireframes</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Prototype</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Development</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Test</h3>
    </div>
    <div className="phaseTitleContainer">
      <h3>Launch</h3>
    </div>
  </div>
);

export default PhasesBar;
