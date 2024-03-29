import React from "react";
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AuthorizeUser } from '../actions/user';



class Login extends React.Component {
    state = {
        UserID: '',
        IsAuth: false

    }
    handleClick = () => {
        if (this.state.UserID !== '') {
            const { dispatch } = this.props;
            dispatch(AuthorizeUser(this.state.UserID))
            this.props.history.push("/");
            this.setState({ IsAuth: true });
        }
        else {
            alert("Please select a user ..");
        }
    }
    handleChange = (e) => {
        this.setState({ UserID: e.target.value });
    }

    render() {

        return (
            <Container style={{
                position: 'absolute', left: '20%', top: '20%',
            }}>

                <Row>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                UserName
                            </Form.Label>
                            <Col sm={9}>
                                <select onChange={this.handleChange} className="browser-default custom-select">
                                    <option>Select User</option>
                                    {this.props.users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))}
                                </select>
                                <Button style={{ margin: '20px' }} variant="primary" type="button" onClick={this.handleClick}>
                                    Login
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        )
    };

}

function mapStateToProps({ users, user }) {

    return {
        users: Object.entries(users).map(([key, value]) => ({ id: value.id, name: value.name })),
        isAuthUser: user !== null
    }
}

export default connect(mapStateToProps)(Login);