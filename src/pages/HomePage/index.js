import React, { Component } from 'react';
import Logo from "./mlds_logo.jpg";
// import { Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import InstagramEmbed from 'react-instagram-embed';



class EventsPage extends Component {

  render() {
    return (
      <div >
        <header>
          <img className="LogoImage" src={Logo} alt="Not found"/>
        </header>


        <p>
          We strive to encourage students to pursue and share their interests in the field of data science and machine learning. We hold weekly meetings on Tuesday nights in the form of technical and career related data science workshops, technical talks by faculty members, and presentations by guests from industry. We also plan extra social events where members will have the opportunity to meet with researchers and recruiters in the field. Beyond lectures, we support participation in online ML competitions, and generally pursue projects that interest us.
        </p>

        <InstagramEmbed
  url='https://www.instagram.com/mlds_ut/'
  maxWidth={450}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
/>

        <p>
          Membership is free and open to all UT students – both undergraduate and graduate. If you are new to machine learning and data science, we’d love to have you join us! Come to meetings via Zoom and check out our resources page for tips on how to get started.
        </p>

        <a href="https://forms.gle/iACZDWwHNY54Qr2P8">
        <button>
          Sign up here to be a member!
        </button>
        </a>

        <p>
          Access our Facebook group or the events page to learn more about meeting times/locations, topics covered, and competitions. Be sure to check out our Instagram for club updates, activities, and pictures! Also, remember to follow our page on LinkedIn!
        </p>
 <p>
               
 </p>
      
   
    
        
     <SocialIcon url="https://www.facebook.com/mldsutaustin" />
     <span>&nbsp;&nbsp;</span>
      <SocialIcon url="https://www.linkedin.com/company/utmlds" />
      <span>&nbsp;&nbsp;</span>
      <SocialIcon url="https://www.instagram.com/mlds_ut/" />
      <span>&nbsp;&nbsp;</span>

      
<p>
  Email us your questions at: <a href="mlds.utexas@gmail.com"> mlds.utexas@gmail.com</a>
</p>

    
     

       



      </div>
      
    );
  }
}

export default EventsPage;
