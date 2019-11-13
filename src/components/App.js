import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoadingBar } from 'react-redux-loading';
import { handleIntialData } from '../actions/shared';
import {UauthorizeUser} from '../actions/user';
import Login from './Login';
import { connect } from 'react-redux';
import Main from './Main';
import Leaderboard from './Leaderborad';
import NewQuestion from './NewQuestion';
import AnswerQuestion from './AnswerQuestion';
import { NavigationBar } from './NavigationBar';
import { CardColumns } from 'react-bootstrap';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleIntialData())
    }
  }
  logOut = () => {
    this.props.dispatch(UauthorizeUser(this.props.user));
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
                    <NavigationBar logOut={this.logOut} history={this.props.history} logo={this.props.logo} name={this.props.name} />
                    <Switch>
                      <Route path="/" exact component={Main} />
                      <Route path="/logout" exact component={Main} />
                      <Route path="/add" exact component={NewQuestion} />
                      <Route path="/questions/:question_id" exact component={AnswerQuestion} />
                      <Route path="/leaderboard" exact component={Leaderboard} />
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
  const authUser = users[user];

  return {
    loading: Object.keys(users).length === 0 && users.constructor === Object,
    isAuthUser: user !== null,
    logo: user !== null? authUser.avatarURL:null,
    name: user !== null? authUser.name:null,



  }
}



export default connect(mapStateToProps)(App)
