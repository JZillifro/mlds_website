import React from 'react';

import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import OfficersPage from './pages/OfficersPage'
import ResourcesPage from './pages/ResourcesPage'

import './App.css';
import './Style.css';

import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <div className="NavBar">

              <NavLink exact to="/" className="Button NavButton" activeClassName="Button NavButtonActive">Home</NavLink>
              <NavLink exact to="/officers" className="Button NavButton" activeClassName="Button NavButtonActive">Officers</NavLink>
              <NavLink exact to="/events" className="Button NavButton" activeClassName="Button NavButtonActive">Events</NavLink>
              {/*
                <NavLink exact to="/competition" className="Button NavButton" activeClassName="Button NavButtonActive">Competition</NavLink>
                <NavLink exact to="/datahack" className="Button NavButton" activeClassName="Button NavButtonActive">Datahack</NavLink>
              */}
              <NavLink exact to="/resources" className="Button NavButton" activeClassName="Button NavButtonActive">Resources</NavLink>

          </div>
          <div className="Content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/officers" component={OfficersPage} />

              <Route path="/resources" component={ResourcesPage} />
            </Switch>
          </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
