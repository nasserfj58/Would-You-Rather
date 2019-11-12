import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoadingBar } from 'react-redux-loading';
import { handleIntialData } from '../actions/shared';
import Login from './Login';
import { connect } from 'react-redux';
import Main  from './Main';
import Leaderboard from './Leaderborad';
import NewQuestion from './NewQuestion';

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
                      <Route path="/add" exact component={NewQuestion} />
                      <Route path="/leaderboard" exact component={Leaderboard}/>
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
  return {
    loading: Object.keys(users).length === 0 && users.constructor === Object,
    isAuthUser: user !== null,
  


  }
}



export default connect(mapStateToProps)(App)
