import React from 'react';

function OfficerPanel(props) {
  return (
    <div className="OfficerPanel">
      <div>
        <img className="OfficerImage" src={props.image} alt="Not found"/>
      </div>
      <div className="OfficerName">{props.name}</div>
      <div className="OfficerTitle">{props.title}</div>
    </div>
  );
}

export default OfficerPanel;
