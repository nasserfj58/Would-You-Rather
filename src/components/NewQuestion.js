import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { NavigationBar } from './NavigationBar';
import { UauthorizeUser } from '../actions/user';
class NewQuestion extends React.Component {
    logOut = () => {
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                <NavigationBar logOut={this.logOut} history={this.props.history} logo={this.props.logo} name={this.props.name} />
                <Form>
                    <Form.Text className="text-muted">
                        Would You Rather .. ?
        </Form.Text>
                    <Form.Group controlId="formOption1">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control placeholder="Option 1" />
                    </Form.Group>

                    <Form.Group controlId="formOption1">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control placeholder="Optin 2" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Question
                </Button>
                </Form>
            </div>
        )
    }
}
function mapStateToProps({ user, users }) {
    const authUser = users[user];

    return {
        logo: authUser.avatarURL,
        name: authUser.name
    }
}

export default connect(mapStateToProps)(NewQuestion);