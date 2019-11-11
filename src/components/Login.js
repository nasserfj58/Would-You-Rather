import React from "react";
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AuthorizeUser, GetauthorizeUser } from '../actions/user';
import { Route, Switch } from 'react-router-dom';
import App from './App';


class Login extends React.Component {
    state = {
        UserID: '',
        IsAuth: false

    }
    handleClick = () => {
        if (this.state.UserID != '') {
            const { dispatch} = this.props;
            var auth = dispatch(AuthorizeUser(this.state.UserID))
            this.props.history.push("/");
            this.setState({ IsAuth: true });
        }
        else{
            alert("Please select a user ..");
        }
    }
    handleChange = (e) => {
        console.log(e);
        this.setState({ UserID: e.target.value });
    }

    render() {
        // if (this.state.IsAuth) {
        //     return (
        //         <Switch>
        //             <Route component={App} />
        //         </Switch>
        //     )
        // }


        return (
            <Container style={{
                position: 'absolute', left: '50%', top: '50%',
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


function mapStateToProps({ users,user }) {
  
    return {
        users: Object.entries(users).map(([key, value]) => ({ id: value.id, name: value.name })),
        isAuthUser: user !== null
    }
}
// function mapAuthrizeToProps(dispatch) {
//     return { 
//       IsAuthrize : ()=> dispatch(GetauthorizeUser())
   
//     }
//   }



export default connect(mapStateToProps)(Login);