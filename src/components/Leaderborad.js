import React from "react";
import { Table, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import { NavigationBar } from './NavigationBar';
import { UauthorizeUser } from '../actions/user';


class Leaderboard extends React.Component {
    logOut = () => {
        
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                <NavigationBar logOut={this.logOut} history={this.props.history} logo={this.props.logo} name={this.props.name} />
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Asked Questions</th>
                            <th>Answered Questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentUsers.map((user, i) => (

                            <tr key={i}>
                                <td>{++i}</td>
                                <th>{user.name}</th>
                                <td> <Image src={user.avatarURL} /></td>
                                <td>{Object.keys(user.questions).length}</td>
                                <td>{Object.keys(user.answers).length}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    };
}

function mapStateToProps({ users, user }) {
    const authUser = users[user];
    return {
        currentUsers: Object.values(users).sort((a, b) =>
            (Object.keys(a.answers).length + Object.keys(a.questions).length) <
            (Object.keys(b.answers).length + Object.keys(b.questions).length)),
        logo: authUser.avatarURL,
        name: authUser.name
    }
}


export default connect(mapStateToProps)(Leaderboard);