import React, { Component } from 'react';
import Logo from "./mlds_logo.jpg";

class EventsPage extends Component {

  render() {
    return (
      <div>
        <header>
          <img className="LogoImage" src={Logo} alt="Not found"/>
        </header>

        <p>
          We strive to encourage students to pursue and share their interests in the field of data science and machine learning. We hold weekly meetings on Monday nights in the form of technical and career related data science workshops, technical talks by faculty members, and presentations by guests from industry. We also plan extra social events where members will have the opportunity to meet with researchers and recruiters in the field. Beyond lectures, we support participation in online ML competitions, and generally pursue projects that interest us. Read more about last semester’s Kaggle competition and featured participants here.
        </p>

        <p>
          Membership is free and open to all UT students – both undergraduate and graduate. If you are new to machine learning and data science, we’d love to have you join us! Come to meetings on Monday nights @ 7:00 in EER 3.646 and check out our resources page for tips on how to get started. You can also sign up for our weekly newsletter below.
        </p>

        <p>
          Access our Facebook group to learn more about meeting times/locations, topics covered, and competitions.
        </p>
      </div>
    );
  }
}

export default EventsPage;
