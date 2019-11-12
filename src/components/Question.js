import React from "react";
import { Card, Button,Image } from "react-bootstrap";
import { connect } from 'react-redux';

export const Question = (props) => {

  return (
    <Card>

      <Card.Body>
        <Card.Title>Would You Rather ?</Card.Title>
        <Image src={props.question.logo}/>
        <Card.Title>Author : {props.question.author}</Card.Title>
        <Card.Text style={{color:props.question.answer === "1" ? '#02f7d6' :'black'}}>
          1- {props.question.option1}
          <br/>
          Percentage : {props.question.op1P} %
        </Card.Text>
        <Card.Text style={{color:props.question.answer === "2" ? '#02f7d6' :'black'}}>
          2- {props.question.option2}
          <br/>
          Percentage : {props.question.op2P} %
        </Card.Text>
        {! props.isAnswerd ?
                  <Button variant="primary">Answer</Button> : ""
        }

      </Card.Body>
    </Card>
  );
}


export default connect()(Question);

