import React from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { NavigationBar } from './NavigationBar';
import { UauthorizeUser } from '../actions/user';
import { handleSaveQuestion } from '../actions/shared';
class NewQuestion extends React.Component {
    state = {
        option1: '',
        option2: ''
    }
    logOut = () => {
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    updateOptions = (e) => {
        const option = e.target.value;
        console.log(e.target);
        if (option) {
            if (e.target.id === "option1")
                this.setState({
                    option1: option
                });
            else
                this.setState({
                    option2: option
                });
        }

    }
    addQuestion = () => {

        const {dispatch,userId,history} = this.props;
        const {option1, option2} = this.state
        if (!this.state.option1 || !this.state.option2) {
            alert("Please Fill the Option");
            return;
        }
        dispatch(handleSaveQuestion(option1,option2));
        history.push('/');
    }
    render() {
        return (
            <div>

                <NavigationBar logOut={this.logOut} history={this.props.history} logo={this.props.logo} name={this.props.name} />
                <Container style={{
                    position: 'absolute', left: '25%', top: '25%',
                }}>

                    <Row>
                        <Col sm={9}>
                            <Form>
                                <Form.Label> Would You Rather .. ?</Form.Label>

                                <Form.Group >
                                    <Form.Label>Option 1</Form.Label>
                                    <Form.Control onChange={this.updateOptions} id="option1" placeholder="Option 1" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Option 2</Form.Label>
                                    <Form.Control onChange={this.updateOptions} id="option2" placeholder="Optin 2" />
                                </Form.Group>
                                <Button onClick={this.addQuestion} variant="primary" type="button">
                                    Add Question
                                 </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
function mapStateToProps({ user, users }) {
    const authUser = users[user];

    return {
        logo: authUser.avatarURL,
        name: authUser.name,
        userId: authUser.id
    }
}

export default connect(mapStateToProps)(NewQuestion);