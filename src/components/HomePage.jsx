import homebg from '../assets/images/background/home.png';
import buttonImg from '../assets/icons/button.png';
import { CountUp } from 'countup.js';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const countUp = new CountUp('target', 1103, {
      duration: 3,
      enableScrollSpy: true,
      scrollSpyOnce: true
    });
    
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, []);

  return (
    <div style={{
      zIndex: -1,
      backgroundImage: `url(${homebg})`,
      backgroundColor: 'rgba(255,255,255,0.6)',
      backgroundBlendMode: 'lighten',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
      minHeight: '100vh'
    }}>
      <div className="counter">
        <div id="target">0</div>
        <div style={{ textAlign: 'center' }}>
          PRODUCTS COLLECTED
        </div>
      </div>

      <div className="button-container">
        <div className="button-wrapper">
          <a href="aboutus">
            <img src={buttonImg} style={{width: 300}} alt="About Us" />
            <div className="button-text">ABOUT US</div>
          </a>
        </div>
        <div className="button-wrapper">
          <a href="events">
            <img src={buttonImg} style={{width: 300}} alt="Events" />
            <div className="button-text">EVENTS</div>
          </a>
        </div>
        <div className="button-wrapper">
          <a href="getinvolved">
            <img src={buttonImg} style={{width: 300}} alt="Get Involved" />
            <div className="button-text">GET INVOLVED</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;