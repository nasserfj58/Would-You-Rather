import React from 'react';
import { NavigationBar } from './NavigationBar';
import { connect } from 'react-redux';
import { UauthorizeUser } from '../actions/user';
import { Tabs, Tab} from "react-bootstrap";

class Main extends React.Component {
    logOut = () => {
        console.log(this.props);
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                <NavigationBar logOut={this.logOut} history={this.props.history} logo = {this.props.logo} name={this.props.name} />
                <div>
                    <Tabs defaultActiveKey="unanswered" id="questions-tab">
                        <Tab eventKey="answered" title="Answered Questions">
                            <div> hi</div>
                        </Tab>
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                        </Tab>
                    </Tabs>
                </div>
            </div>)
    }
}
function mapStateToProps({ user,users }) {
    const authUser = users[user];
   
    return {
        logo: authUser.avatarURL,
        name: authUser.name
    }
}


export default connect(mapStateToProps)(Main);