import React, { Component } from 'react';
import Tabletop from 'tabletop';

class ResourcesPage extends Component {
  constructor() {
    super()
    this.state = {
      resources: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '18U6-1kMT_42MUGTN3w11ELUXlohwpLnPylyj8l2vYk0',
      callback: googleData => {
        this.setState({
          resources: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="Grid">
        {
          this.state.resources.map((resource, i) => {
            return(
              <div className="ResourcePanel" key={i}>
              {resource.url && <div className="ResourceLabel">{resource.label}:</div>}
              {!resource.url && <div className="ResourceLabelUpper">{resource.label}:</div>}
              {resource.url && <a className="ResouceURL" href={resource.url}>{resource.url}</a>}
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ResourcesPage;
