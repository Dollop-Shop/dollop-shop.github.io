import React, { useState } from 'react';
import dollopBottle from './dollop-bottle.png';
import './LandingPage.less';

function LandingPage() {
  const [email, setEmail] = useState();

  return (
    <div className="landing-page">
      <div className="landing-page-a">
        <img src={dollopBottle} alt="Dollop Lotion Bottle" />
      </div>
      <div className="landing-page-b">
        <h1>Bring your skin</h1>
        <h1>back to life</h1>
        <p>
          Dollop is a new skincare company launching soon.
          Be the first to know when our products become available.
        </p>
        <form action="https://store.us20.list-manage.com/subscribe/post?u=d2ccb41196286a704a6188eeb&amp;id=f7cde64b12" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="EMAIL" id="mce-EMAIL" placeholder="Email Address" />
          <input type="hidden" name="b_d2ccb41196286a704a6188eeb_f7cde64b12" tabIndex="-1" value="" />
          <input type="submit" value="Get notified" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
