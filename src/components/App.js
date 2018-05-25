import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const NavbarStyled = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: rgb(64, 64, 64);
    text-align: center;
    margin: 0px;
`;

export default class App extends React.Component {
    /**
     * Renders the App.
     */
    render() {
        return (
            <div>
                <NavbarStyled />
                <h1>Hello world!</h1>
                <p>This is the D&D spellbook.</p>
            </div>
        );
    }
}