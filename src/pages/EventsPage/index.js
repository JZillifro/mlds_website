import React, { Component } from 'react';
import Tabletop from 'tabletop';
import EventPanel from './EventPanel.js'

class EventsPage extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1ZBdgiSdene5lx9T0fW0vCJx9JQ8e-Ic1GbJSHrEgDh0',
      callback: googleData => {
        this.setState({
          events: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div>
        <div className="Grid">
          {
            this.state.events.map((event, i) => {
              return(<EventPanel title={event.title} description={event.description} image={event.image} date={event.date} time={event.time} location={event.location} slides={event.slides} notebook={event.notebook} key={i}/>)
            })
          }
        </div>
      </div>
    );
  }
}

export default EventsPage;
