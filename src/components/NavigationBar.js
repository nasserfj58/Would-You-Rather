import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
 
export const NavigationBar = (props) => {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand><NavLink to="/">Would You Rather ?</NavLink></Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/" style={{marginLeft:"15px"}}>Questions</NavLink>
                <NavLink to="/add" style={{marginLeft:"15px"}}>Add Question</NavLink>
                <NavLink to="/leaderboard" style={{marginLeft:"15px"}}>Leaderboard</NavLink>
                <div style={{marginLeft:"15px"}}>
                     {props.name}
                     <Image src={props.logo}/>
                </div>
                 <NavLink to="/login" onClick={() => { props.logOut() }} style={{marginLeft:"15px"}}>
                     Logout
                </NavLink>                
            </Nav>
        </Navbar>
    );
}


export default connect()(NavigationBar);