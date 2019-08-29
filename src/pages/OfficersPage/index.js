import React, { Component } from 'react';
import Tabletop from 'tabletop';
import OfficerPanel from './OfficerPanel.js'

class OfficersPage extends Component {
  constructor() {
    super()
    this.state = {
      officers: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1ICSvqRU1YoyzBFalXtiDKMP9RwOVw34BcFMtd51meYc',
      callback: googleData => {
        this.setState({
          officers: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="Grid">
        {
          this.state.officers.map((officer, i) => {
            return(<OfficerPanel name={officer.name} title={officer.title} image={officer.image} key={i}/>)
          })
        }
      </div>
    );
  }
}

export default OfficersPage;
