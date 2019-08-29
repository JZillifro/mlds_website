import React from 'react';

function EventPanel(props) {
  return (
    <div className="EventPanel">
      <div className="EventImageSection">
        <img className="EventImage" src={props.image} alt="Not found"/>
      </div>
      <div className="EventTextSection">
        <div  className="EventTitle">{props.title}</div>
        <p className="EventTextDescription">{props.description}</p>
      </div>
      <div className="EventInfoSection">
        <div className="EventInfo">{props.date}</div>
        <div className="EventInfo">{props.time}</div>
        <div className="EventInfo">{props.location}</div>
      </div>
    </div>
  );
}

export default EventPanel;
