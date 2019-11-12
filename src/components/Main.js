import React from 'react';
import { NavigationBar } from './NavigationBar';
import { connect } from 'react-redux';
import { UauthorizeUser } from '../actions/user';
import { Tabs, Tab,Container,Row,Col } from "react-bootstrap";
import { Question } from "./Question";

class Main extends React.Component {
    logOut = () => {
        console.log(this.props);
        this.props.dispatch(UauthorizeUser(this.props.authUser));
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <NavigationBar logOut={this.logOut} history={this.props.history} logo={this.props.logo} name={this.props.name} />
                <div>
                    <Tabs defaultActiveKey="unanswered" id="questions-tab">
                        <Tab eventKey="answered" title="Answered Questions">
                          <ul>
                                {this.props.answerdQuestions.map((question, i) => (
                                     <li style={{display: 'inline-block',margin:'7px', height:'20%', width:'25%'}}><Question question={question} isAnswerd={true} /></li>
                            ))}
 
                            </ul>

                        </Tab>
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                            <ul>
                            {this.props.unanswerdQuestions.map((question, i) => (
                                  <li style={{display: 'inline-block',margin:'7px', height:'20%', width:'25%'}}><Question question={question} isAnswerd={false} /></li>
                            ))}
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>)
    }
}
function mapStateToProps({ user, users, questions }) {

    console.log(questions);
    const authUser = users[user];

    const anwerdQ = Object.values(questions).filter(question => (question.optionOne.votes && question.optionOne.votes.includes(user)) || (question.optionTwo.votes && question.optionTwo.votes.includes(user)))
    const unanwerdQ = Object.values(questions).filter(question => (!question.optionOne.votes || !question.optionOne.votes.includes(user)) && (!question.optionTwo.votes || !question.optionTwo.votes.includes(user)))

    return {
        logo: authUser.avatarURL,
        name: authUser.name,
        answerdQuestions: anwerdQ.map((value) => ({ id: value.id, author: value.author, option1: value.optionOne.text, option2: value.optionTwo.text, time: value.timestamp, answer : value.optionOne.votes.includes(user)?"1":"2", logo:users[value.author].avatarURL, op1P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 : (value.optionOne.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op2P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionTwo.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100 })),
        unanswerdQuestions: unanwerdQ.map((value) => ({ id: value.id, author: value.author, option1: value.optionOne.text, option2: value.optionTwo.text, time: value.timestamp, answer:"-1",logo:users[value.author].avatarURL,op1P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionOne.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100,op2P:!value.optionOne.votes.length && !value.optionTwo.votes.length? 0 :(value.optionTwo.votes.length /(value.optionOne.votes.length+value.optionTwo.votes.length))*100 })),
    }
}


export default connect(mapStateToProps)(Main);