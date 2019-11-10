import React from 'react';
import { NavigationBar } from './NavigationBar';
import { connect } from 'react-redux';
import { UauthorizeUser } from '../actions/user';

class Main extends React.Component{
    logOut = () => {
        console.log(this.props);
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
                <NavigationBar logOut={this.logOut} />
            </div>)
    }
}
function mapStateToProps({ user }) {
    console.log(user);
    return {
      authUser: user,  
    }
  }


export default connect(mapStateToProps)(Main);