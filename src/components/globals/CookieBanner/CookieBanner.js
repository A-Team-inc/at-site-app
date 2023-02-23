import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import './CookieBanner.scss'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState();

  const handleClickAccept = () => {
    Cookie.set('consent', true, { sameSite: "strict", expires: 365 });
    setIsVisible(false);
  };

  const handleDeleteCookies = () => {
    const cookies = Cookie.get();
    for (const cookie in cookies) {
      Cookie.remove(cookie);
    }
    Cookie.set('consent', true, { sameSite: "strict", expires: 365 });
    setIsVisible(false);
  }

  useEffect(() => {
    setIsVisible(!Cookie.get('consent'))
  }, [])

  return (
    <>
      {isVisible && (
        <div className="cookie-banner">
          <p className="cookie-banner__text">
            This website uses cookies to enhance the user experience
          </p>
          <div className="cookie-banner__buttons">
            <button className="button-accept" onClick={handleClickAccept}>Accept</button>
            <button className="button-decline" onClick={handleDeleteCookies}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
