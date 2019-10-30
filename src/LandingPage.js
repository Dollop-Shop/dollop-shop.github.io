import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import zombieHand from './zombie-hand-web.png';
import dollopBottle from './dollop-bottle.png';
import './LandingPage.less';
import instagramImg from './instagram.svg';
import youtubeImg from './youtube.svg';
const INSTAGRAM = 'https://instagram.com/dollopskincare';
const YOUTUBE = 'https://www.youtube.com/watch?v=Kz-joERX5AY';


const MAILCHIMP_URL = "//store.us20.list-manage.com/subscribe/post?u=d2ccb41196286a704a6188eeb&amp;id=f7cde64b12";

function LandingPage() {
  return (
    <div className="landing-page">
      <img src={zombieHand} alt="Zombie Hand" className="zombie-hand" />
      <div className="landing-page-a">
        <img src={dollopBottle} alt="Dollop Lotion Bottle" />
      </div>
      <div className="landing-page-b">
        <h1>Revitalize&nbsp;</h1>
        <h1>your skin</h1>
        <p>
          Dollop is a new skincare company launching soon.
          Be the first to know when our products become available.
        </p>
        <div className="mailchimp">
          <MailchimpSubscribe url={MAILCHIMP_URL} />
        </div>
        <div className="social-icons">
          <a href={INSTAGRAM}>
            <img src={instagramImg} alt="Instagram" />
          </a>
          <a href={YOUTUBE}>
            <img src={youtubeImg} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;



