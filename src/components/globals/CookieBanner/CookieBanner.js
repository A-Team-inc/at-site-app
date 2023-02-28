import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import Cookie from 'js-cookie';

import './CookieBanner.scss'

const CookieConsent = () => {
  const [isCookieBannerHidden, setIsCookieBannerHidden] = useState(true)
  const location = useLocation();

  const isBrowser = () => {
    return typeof window !== 'undefined'
  }

  const getValue = (key) => {
    if (isBrowser() && window.localStorage.getItem(key)) {
      return JSON.parse(!!window.localStorage.getItem(key))
    }
  }

  const setValue = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const hideCookieBanner = () => {
    setIsCookieBannerHidden(true);
    setValue('consentCookieHidden', true)
  }

  const enableAnalytics = () => {
    Cookie.set('gatsby-gdpr-google-tagmanager', true, { expires: 365 })
    hideCookieBanner()
  };

  if (isBrowser()) {
    initializeAndTrack(location)
  }

  useEffect(() => {
    setIsCookieBannerHidden(!!getValue('consentCookieHidden'))
  }, [])

  return (
    <>
      {!isCookieBannerHidden && (
        <div className="cookie-banner">
          <p className="cookie-banner__text">
            This website uses cookies to enhance the user experience
          </p>
          <div className="cookie-banner__buttons">
            <button className="button-accept" onClick={enableAnalytics}>Accept</button>
            <button className="button-decline" onClick={hideCookieBanner}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
