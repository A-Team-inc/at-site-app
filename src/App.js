import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

import HeroImage from './assets/Hero.jpg';
import './App.css';

function App() {
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderState(false)
    }, 5000);
  }, []);


  
  return (
    <div className="A-Team">
      { loaderState &&  <Loader /> }
      <div className="content">
        <div className="hero-section">
          <div className="name">A-Team</div>
          <img src={HeroImage} className="hero-logo" alt="logo" />
        </div>
        <div className="middle-section">
          <p class="line-1 anim-typewriter">We can everything you want and do it good</p>
          <h2>We are a small but super talented company with the high level it specialists.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
