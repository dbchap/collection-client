import 'bulma/css/bulma.css';
import React from 'react';
import { connect } from 'react-redux';
import appStyles from './App.module.css';

import { fetchCollectionitems } from './store/actions/collectionitems';
import { addLog, fetchLogs } from './store/actions/logger';
import Collections from './pages/collections.component';
import Logs from './pages/logs.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {


  componentDidMount() {
    this.props.fetchCollectionitems();
    this.props.fetchLogs();
    setInterval(() => this.props.fetchCollectionitems(), 10000);
  }

  render() {
    return (
      <Router>
        <div className={appStyles.outer}>
          <div className={appStyles.inner}>
            <div className={appStyles.header}>
              <div className={appStyles.appTitle}>
                Marvelous!
            </div>
              <div className={appStyles.appSubTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </div>
            </div>
            <nav>
              <ul className={appStyles.nav}>
                <li>
                  <Link to="/">Collections</Link>
                </li>
                <li>
                  <Link to="/logs">Logs</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/logs">
                <Logs />
              </Route>
              <Route path="/">
                <Collections />
              </Route>

            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}


const mapDispatchToProps = {
  fetchCollectionitems,
  fetchLogs,
  addLog,
}

export default connect(null, mapDispatchToProps)(App);
