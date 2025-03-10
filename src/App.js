import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from './context/LoginContext';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Signup from './views/Signup';
import SignIn from './views/SignIn';
import SignupContractor from './views/SignupContractor';
import SignupHomeowner from './views/SignupHomeowner';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  const [isLoggedIn, setLoggedIn] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <LoginContext.Provider value={{isLoggedIn, setLoggedIn}}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutDefault} />
            <AppRoute exact path="/signup/contractor" component={SignupContractor} layout={LayoutDefault} />
            <AppRoute exact path="/signup/homeowner" component={SignupHomeowner} layout={LayoutDefault} />
            <AppRoute exact path="/signin" component={SignIn} layout={LayoutDefault} />
          </Switch>
        )} />
      </LoginContext.Provider>
  );
}

export default App;