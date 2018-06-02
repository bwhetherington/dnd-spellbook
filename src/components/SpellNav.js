import React from "react";
import styled from "styled-components";
import { Navbar, Checkbox } from "react-bootstrap";

const SearchBar = styled.input`
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
`;

// const Select = styled.select`
//     margin-left: 10px;
//     background: #c53023;
//     color: white;
//     border: 0px;
//     padding: 5px;
//     border-radius: 5px;
// `;

const NavbarLabel = styled.span`
    color: white;
    font-size: 150%;
    font-weight: bold;
    margin-right: 20px;
`;

const SpellNavbar = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: #db4437;
    padding: 10px;
    text-align: left;
    margin: 0px;
    color: white;
    border-bottom: 3px solid #c53023;
`;

const SpellNav = (props) => {
    return (
        <SpellNavbar fixedTop>
            <NavbarLabel>D&D Spellbook</NavbarLabel>
            <SearchBar type="text" onChange={props.handleFilterTextChanged} />
            <br />
            <Checkbox inline onChange={props.handleFilterRitualChanged} >Rituals only</Checkbox>
            <Checkbox inline onChange={props.handleFilterConcentrationChanged} >Exclude concentration</Checkbox>
        </SpellNavbar>
    );
}

export default SpellNav;