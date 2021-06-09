import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import classnames from 'classnames';

import Home from './Home';
import Event from './Event';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWithRouter {...this.props} />
      </Router>
    );
  }
}

class SiteRouterBase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.container}>
              <Link to="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                  Chatter Dating
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events" component={Event} />
              <Route component={() => ''} />
            </Switch>
          </div>
        </div>
    );
  }
}
const AppWithRouter = withRouter(props => <SiteRouterBase {...props} />);

export default App;
