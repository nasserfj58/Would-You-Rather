import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { connect } from 'react-redux';

export const NavigationBar = (props) => {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand onClick={() => { props.history.push("/") }}>Would You Rather ?</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => { props.history.push("/") }}>Questions</Nav.Link>
                <Nav.Link onClick={() => { props.history.push("/add") }}>AddQuestion</Nav.Link>
                <Nav.Link onClick={() => { props.history.push("/leaderboard") }}>Leaderboard</Nav.Link>
                {props.name}
                <Image src={props.logo}/>
                <Nav.Link onClick={() => { props.logOut() }}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}


export default connect()(NavigationBar);