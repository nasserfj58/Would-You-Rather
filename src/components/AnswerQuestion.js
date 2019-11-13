import React from "react";
import { Card, Button, Image, Radio } from "react-bootstrap";
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';


class AnswerQuestion extends React.Component {
    state = {
        answer: ''
    }
    handleRadioOtionChange = (e) => {
        if (e.target.value) {
            this.setState({ answer: e.target.value })
        }
    }
    handleSubmit = () => {

        const { answer } = this.state
        if (!answer) {
            alert("Please Chose Option");
            return;

        }
        const question = this.props.unanswerdQuestions.filter(x => x.id === this.props.match.params["question_id"])[0];
        const { dispatch, userId, history } = this.props;
        dispatch(handleSaveAnswer(question.id, answer));
        history.push('/');

    }
    render() {
        const question = this.props.unanswerdQuestions.filter(x => x.id === this.props.match.params["question_id"])[0];
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Would You Rather ?</Card.Title>
                    <Image src={question.logo} />
                    <Card.Title>Author : {question.author}</Card.Title>
                    <Card.Text>
                        {question.option1}
                        <input type="radio" name="woludYouRather"
                            value="optionOne"
                            onChange={this.handleRadioOtionChange} />

                        <br />
                        Number OF Voters : {question.op1AnswerdBy}
                        <br />
                        Percentage : {question.op1P} %
                    </Card.Text>
                    <Card.Text>
                        {question.option2}
                        <input type="radio" name="woludYouRather"
                            value="optionTwo"
                            onChange={this.handleRadioOtionChange} />

                        <br />
                        Number OF Voters : {question.op2AnswerdBy}
                        <br />
                        Percentage : {question.op2P} %
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleSubmit}>Answer</Button>
                </Card.Body>
            </Card>
        )
    }
}
function mapStateToProps({ user, users, questions }) {

    const unanwerdQ = Object.values(questions).filter(question => (!question.optionOne.votes || !question.optionOne.votes.includes(user)) && (!question.optionTwo.votes || !question.optionTwo.votes.includes(user)))
    
    return {
        user,
        unanswerdQuestions: unanwerdQ.map((value) => ({ id: value.id, author: value.author, option1: value.optionOne.text, option2: value.optionTwo.text, time: value.timestamp, answer: "-1", logo: users[value.author].avatarURL, op1P: !value.optionOne.votes.length && !value.optionTwo.votes.length ? 0 : (value.optionOne.votes.length / (value.optionOne.votes.length + value.optionTwo.votes.length)) * 100, op2P: !value.optionOne.votes.length && !value.optionTwo.votes.length ? 0 : (value.optionTwo.votes.length / (value.optionOne.votes.length + value.optionTwo.votes.length)) * 100, op1AnswerdBy: value.optionOne.votes.length, op2AnswerdBy: value.optionTwo.votes.length })),
    }
}



export default connect(mapStateToProps)(AnswerQuestion);

