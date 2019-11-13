import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab} from "react-bootstrap";
import { Question } from "./Question";

class Main extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <Tabs defaultActiveKey="unanswered" id="questions-tab">
                        <Tab eventKey="answered" title="Answered Questions">
                          <ul>
                                {this.props.answerdQuestions.map((question, i) => (
                                     <li key = {i} style={{display: 'inline-block',margin:'7px', height:'20%', width:'25%'}}><Question question={question} isAnswerd={true} history={this.props.history}/></li>
                            ))}
 
                            </ul>

                        </Tab>
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                            <ul>
                            {this.props.unanswerdQuestions.map((question, i) => (
                                  <li key = {i} style={{display: 'inline-block',margin:'7px', height:'20%', width:'25%'}}><Question question={question} isAnswerd={false} history={this.props.history}  /></li>
                            ))}
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>)
    }
}
function mapStateToProps({ user, users, questions }) {

    const anwerdQ = Object.values(questions).filter(question => (question.optionOne.votes && question.optionOne.votes.includes(user)) || (question.optionTwo.votes && question.optionTwo.votes.includes(user)))
    const unanwerdQ = Object.values(questions).filter(question => (!question.optionOne.votes || !question.optionOne.votes.includes(user)) && (!question.optionTwo.votes || !question.optionTwo.votes.includes(user)))

    return {
        answerdQuestions: anwerdQ.sort((a,b)=>(new Date(b.timestamp) - new Date(a.timestamp))).map((value) => ({ id: value.id, author: value.author, option1: value.optionOne.text, option2: value.optionTwo.text, time: value.timestamp, answer : value.optionOne.votes.includes(user)?"1":"2", logo:users[value.author].avatarURL, op1P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 : (value.optionOne.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op2P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionTwo.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op1AnswerdBy:value.optionOne.votes.length,op2AnswerdBy:value.optionTwo.votes.length })),
        unanswerdQuestions: unanwerdQ.sort((a,b)=>(new Date(b.timestamp) - new Date(a.timestamp))).map((value) => ({ id: value.id, author: value.author, option1: value.optionOne.text, option2: value.optionTwo.text, time: value.timestamp, answer:"-1",logo:users[value.author].avatarURL,op1P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionOne.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op2P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionTwo.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op1AnswerdBy:value.optionOne.votes.length,op2AnswerdBy:value.optionTwo.votes.length })),
    }
}


export default connect(mapStateToProps)(Main);