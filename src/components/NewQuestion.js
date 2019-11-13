import React from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
class NewQuestion extends React.Component {
    state = {
        option1: '',
        option2: ''
    }
    updateOptions = (e) => {
        const option = e.target.value;
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

        const { dispatch, history } = this.props;
        const { option1, option2 } = this.state
        if (!option1 || !option2) {
            alert("Please Fill the Option");
            return;
        }
        dispatch(handleSaveQuestion(option1, option2));
        history.push('/');
    }
    render() {
        return (
            <div>
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

        userId: authUser.id
    }
}

export default connect(mapStateToProps)(NewQuestion);