import React from "react";
import { Button,Form, Row, Container, Col } from 'react-bootstrap';
export const Login = () => {
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
                            <select className="browser-default custom-select">
                                <option>Select User</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <Button style={{margin:'20px'}} variant="primary" type="button">
                                Login
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
}