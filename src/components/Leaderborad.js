import React from "react";
import { Table, Image } from "react-bootstrap";
import { connect } from 'react-redux';

class Leaderboard extends React.Component {

    render() {
        return (
            <div>
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
    return {
        currentUsers: Object.values(users).sort((a, b) =>
            (Object.keys(a.answers).length + Object.keys(a.questions).length) <
            (Object.keys(b.answers).length + Object.keys(b.questions).length)),

    }
}


export default connect(mapStateToProps)(Leaderboard);