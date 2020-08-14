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

        <p>
        Events and Meetings will be updated here alongside their respective slides and notebooks. Come to our meetings via Zoom. 
        </p>

        <a href="https://calendar.google.com/calendar/b/2?cid=Z3QwM2RpM2h2MW5tcDNqbHQ4MWlnZjBxMzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
        <button>
          Click here to view and add the MLDS Events and Meetings Calendar!
        </button>
        </a>


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
