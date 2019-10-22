import React from "react";
import {Navbar,Nav} from "react-bootstrap";
export const NavigationBar = (props) => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Would You Rather ?</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#logout">Logout</Nav.Link>
                <Nav.Link href="#AddQuestion">AddQuestion</Nav.Link>
                <Nav.Link href="#Leaderboard">Leaderboard</Nav.Link>
            </Nav>
        </Navbar>
    );
}