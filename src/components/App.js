import React from 'react';
import { NavigationBar } from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoadingBar } from 'react-redux-loading';
import { handleIntialData } from '../actions/shared';
import { GetauthorizeUser } from '../actions/user';
import Login from './Login';
import { connect } from 'react-redux';
import { NotFound } from './NotFound';
import Main  from './Main';
import Leaderboard from './Leaderborad';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleIntialData())
    }
  }
  render() {
    return (
      <div className="App">

        <Router>
          <React.Fragment>
            <LoadingBar />
            <div>
              {this.props.loading === true
                ? null
                : !this.props.isAuthUser ?
                  <div>
                    <Switch>
                    <Route component={Login} />
                    </Switch>
                  </div> :
                  <div>
                    <Switch>
                      <Route path="/" exact component={Main} />
                      <Route path="/logout" exact component={Main} />
                      <Route path="/add" exact />
                      <Route path="/leaderboard" exact component={Leaderboard}/>
                      <Route component={NotFound} />
                    </Switch>
                  </div>
              }
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ user, users }) {
  console.log(Object.keys(users).length === 0 && users.constructor === Object);
  return {
    loading: Object.keys(users).length === 0 && users.constructor === Object,
    isAuthUser: user !== null


  }
}


export default connect(mapStateToProps)(App)
