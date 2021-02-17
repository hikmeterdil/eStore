import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoadingSpinner from './shared/UIElements/LoadingSpinner'
import StatusContext from './shared/contexts/status-context'

const Home = lazy(() => import('./home/Home'));
const Admin = lazy(() => import('./admin/Admin'));



// Context
// - Auth
// - Cart
// Router
// - /admin
// -  -->
    // ./categories
    // ./products
    // ./aboutus
// <--
// - /categories
// - /categories/:cid/:pid
// - /search
// - /auth
// - /products
// - /products/:pid
// - /aboutus


function App() {
  return (
    <StatusContext.Provider value={{}}>
      <Router>
        {/* <MainNavigation /> */}
        <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/admin" component={Admin}/>
            {/* <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/admin" exact>
              <Admin />
            </Route> */}
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </Router>
    </StatusContext.Provider>
  );
}

export default App;
