import React, { useState } from 'react';
import Cookie from 'js-cookie';
import './CookieBanner.scss'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(!Cookie.get('cookieConsent'));

  const handleClickAccept = () => {
    Cookie.set('consent', true, { sameSite: "strict", expires: 365 });
    setIsVisible(false);
  };

  const handleClickDecline = () => {
    Cookie.remove('consent');
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-banner">
          <p className="cookie-banner__text">
            This website uses cookies to enhance the user experience
          </p>
          <div className="cookie-banner__buttons">
            <button className="button-accept" onClick={handleClickAccept}>Accept</button>
            <button className="button-decline" onClick={handleClickDecline}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
